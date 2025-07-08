import { addons } from '@storybook/preview-api';
import { SET_CURRENT_STORY } from '@storybook/core-events';
import type { StoryId, StoryName, ComponentTitle, StoryKind } from '@storybook/types';
import { toId } from '@storybook/csf';

interface ParamsId {
  storyId: StoryId;
}
interface ParamsCombo {
  kind?: StoryKind;
  title?: ComponentTitle;
  story?: StoryName;
  name?: StoryName;
}

function parseQuery(queryString: string) {
  const query: Record<string, string> = {};
  const pairs = (queryString[0] === '?' ? queryString.substring(1) : queryString)
    .split('&')
    .filter(Boolean);

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export const navigate = (params: ParamsId | ParamsCombo) =>
  addons.getChannel().emit(SET_CURRENT_STORY, params);

export const hrefTo = (title: ComponentTitle, name: StoryName): Promise<string> => {
  return new Promise(resolve => {
    const { location } = document;
    const query = parseQuery(location.search);
    // @ts-expect-error (Converted from ts-ignore)
    const existingId = [].concat(query.id)[0];
    // @ts-expect-error (Converted from ts-ignore)
    const titleToLink = title || existingId.split('--', 2)[0];
    const id = toId(titleToLink, name);
    const path = `/story/${id}`;

    // Drop the `iframe.html` from the preview path
    const sbPath = location.pathname.replace(/iframe\.html$/, '');
    const url = `${location.origin + sbPath}?${Object.entries({ path })
      .map(item => `${item[0]}=${item[1]}`)
      .join('&')}`;

    resolve(url);
  });
};

const valueOrCall = (args: string[]) => (value: string | ((...args: string[]) => string)) =>
  typeof value === 'function' ? value(...args) : value;

export const linkTo =
  (
    idOrTitle: string | ((...args: any[]) => string),
    nameInput?: string | ((...args: any[]) => string)
  ) =>
  (...args: any[]) => {
    const resolver = valueOrCall(args);
    const title = resolver(idOrTitle);
    const name = nameInput ? resolver(nameInput) : false;

    if (title?.match(/--/) && !name) {
      navigate({ storyId: title });
    } else if (name && title) {
      navigate({ kind: title, story: name });
    } else if (title) {
      navigate({ kind: title });
    } else if (name) {
      navigate({ story: name });
    }
  };

const linksListener = (e: Event) => {
  const { target } = e;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const element = target as HTMLElement;
  const { sbKind: kind, sbStory: story } = element.dataset;
  if (kind || story) {
    e.preventDefault();
    navigate({ kind, story });
  }
};

let hasListener = false;

const on = () => {
  if (!hasListener) {
    hasListener = true;
    document.addEventListener('click', linksListener);
  }
};
const off = () => {
  if (hasListener) {
    hasListener = false;
    document.removeEventListener('click', linksListener);
  }
};

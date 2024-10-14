import type { ElementRef } from 'react';
import { Pressable } from 'react-native';
import Svg from 'react-native-svg';
import { Icon } from '../components/Icon';

export type SvgRef = ElementRef<typeof Svg>;
export type PressableRef = ElementRef<typeof Pressable>;
export type IconRef = ElementRef<typeof Icon>;

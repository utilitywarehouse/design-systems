module.exports = {
  ...require('@utilitywarehouse/prettier-config'),
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    'react',
    '<THIRD_PARTY_MODULES>',
    '^@(?!utilitywarehouse)(.*)$',
    '^@utilitywarehouse/(.*)$',
    '^.+/[A-Z]',
    '^.+/[a-z]',
  ],
};

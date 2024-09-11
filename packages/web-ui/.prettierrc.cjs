module.exports = {
  ...require('@utilitywarehouse/prettier-config'),
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@utilitywarehouse/(.*)$', '^.+/[A-Z]', '^.+/[a-z]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

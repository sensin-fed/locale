// 正则存放
export default {
  tel: /^1[3456789]\d{9}$/,
  utf8: /([\u0000-\uffff])/u,
  word: /^(\s|\w|[\u4E00-\u9FA5])*$/,
  space: /^\S*$/,
  email: /^([a-z0-9A-Z]+[-|.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/,
};

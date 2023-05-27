// ? Element 常用表单校验规则

/**
 * @description 校验手机号是否合法
 * @param {String} value 手机号码
 * @param {Function} callback 回调函数
 * @returns {void}
 */
export function checkPhoneNumber(value: string, callback: Function) {
  const regexp = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
  if (value === "") callback("请输入手机号码");
  if (!regexp.test(value)) {
    callback(new Error("请输入正确的手机号码"));
  } else {
    return callback();
  }
}

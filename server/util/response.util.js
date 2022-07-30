

const success = (data = null, code = 200) => ({ code, data });

const error = (data = null, code = 500) => ({ code, data });

module.exports = {
  success,
  error,
  Error: error,
  Success: success,
};

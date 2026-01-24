(function () {
  var ctx = window.__ctx || {};
  var data = window.__data || {};
  var ctxBlock = document.getElementById("ctx-block");
  var dataBlock = document.getElementById("data-block");
  var respBlock = document.getElementById("resp-block");
  function render() {
    ctxBlock.textContent = JSON.stringify(ctx, null, 2);
    dataBlock.textContent = JSON.stringify(data, null, 2);
  }
  function showResp(label, res) {
    respBlock.textContent = label + "\n" + JSON.stringify(res, null, 2);
  }
  function handleError(err) {
    showResp("Error", { error: err });
  }
  function bind() {
    document.getElementById("btn-create").onclick = function () {
      data.oldId = data.id;
      delete data.id;
      var sample = Object.assign({}, data || {});
      sample._createdAt = new Date().toISOString();
      google.script.run
        .withSuccessHandler(function (res) {
          showResp("create", res);
        })
        .withFailureHandler(handleError)
        .libCall("rpc_create", { contextKey: ctx.contextKey, data: sample });
    };
    document.getElementById("btn-patch").onclick = function () {
      var patch = { note: "patched at " + new Date().toISOString() };
      google.script.run
        .withSuccessHandler(function (res) {
          showResp("patch", res);
        })
        .withFailureHandler(handleError)
        .libCall("rpc_patchByRowIndex", {
          contextKey: ctx.contextKey,
          rowIndex: ctx.rowIndex,
          patch: patch,
        });
    };
    document.getElementById("btn-update").onclick = function () {
      var updated = Object.assign({}, data || {});
      updated._updatedAt = new Date().toISOString();
      google.script.run
        .withSuccessHandler(function (res) {
          showResp("update", res);
        })
        .withFailureHandler(handleError)
        .libCall("rpc_updateByRowIndex", {
          contextKey: ctx.contextKey,
          rowIndex: ctx.rowIndex,
          data: updated,
        });
    };
    document.getElementById("btn-delete").onclick = function () {
      google.script.run
        .withSuccessHandler(function (res) {
          showResp("delete", res);
        })
        .withFailureHandler(handleError)
        .libCall("rpc_deleteByRowIndex", {
          contextKey: ctx.contextKey,
          rowIndex: ctx.rowIndex,
        });
    };
  }
  render();
  bind();
})();

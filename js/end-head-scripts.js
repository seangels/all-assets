(function () {
  console.log("start injected.");
  window.__env = {
    production: false,
    apiBaseUrl: "",
    currentUser: {
      userId: window.__ctx?.email,
      userName: window.__ctx?.email,
      accessCode: "",
      fullName: window.__ctx?.email,
      email: window.__ctx?.email,
      permissions: [
        { code: "change_request__grid__row-onApproveClick" },
        { code: "change_request__grid__row-onDeleteButtonClick" },
        { code: "change_request__grid__row-onEditButtonClick" },
        { code: "change_request__grid__row-onRejectClick" },
        { code: "change_request__grid__row-onReopenClick" },
        { code: "change_request__grid__toolbarItems-onTaoYC_sua_xoa_them" },
        { code: "change_request__popup-onSaveClick" },
        { code: "change_request__grid__toolbarItems-onTaoYC" },
      ],
    },
    initData: {
      newChangeRequestData: {
        contextKey: window.__ctx?.contextKey,
        changeType: "update",
        objectRowIndexsString: window.__data?.rowIndex,
        objectIdsString: window.__data?.id,
      },
    },
  };

  console.log("end injected.");
})();

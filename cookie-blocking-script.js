const strategies = {
  optIn: 'OPT_IN',
  optOut: 'OPT_OUT',
}

const currentOpt = strategies.optOut;

const config = { childList: true, subtree: true };

const observer = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.tagName && node.tagName === "SCRIPT") {
        const srcAttribute = node.getAttribute("src");
        if (srcAttribute && srcAttribute.includes("advertising") && currentOpt === strategies.optIn) {
          node.remove();
        }
      }
    });
  });
});

observer.observe(document, config);



function showWolfWalletConnectModal() {
  console.log('showWolfWalletConnectModal CALLED');
  const modalStyle = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: #FAF7F7EE; display: flex; align-items: center; justify-content: center;
    z-index: 9999; padding: 0; box-sizing: border-box;
  `;
  const cardStyle = `
    background:#97948f;padding:3.2rem 2rem 3rem 2rem;
    border-radius:22px;box-shadow:0 4px 32px #3b2a241c;
    min-width:360px; max-width:90vw; max-height:80vh; overflow-y:auto;
    text-align:center; min-height:220px; margin: auto;
  `;
  const headerStyle = `
    color:#FAF7F7;font-size:1.13rem;font-weight:600;margin-bottom:0.8rem;letter-spacing:.01em;`;
  const createLinkStyle = `
    color:#FAF7F7;text-decoration:underline;cursor:pointer;font-weight:600;
    display: block; margin: 1.25rem auto 0.25rem auto; font-size: 1rem; text-align: center;
  `;
  const instructionStyle = `
    color:#FAF7F7;font-size:1.05rem;margin-bottom:1rem;font-weight:600;
  `;
  const urlBoxStyle = `
    display:inline-block; background:#fff7da; color:#1c1c1c; font-size:0.99rem; padding:0.51rem 1rem;
    border-radius:10px; border:1.4px solid #ffe88e; font-family: monospace;
    cursor:pointer; user-select:none; box-shadow:0 2px 10px #0001;
  `;
  const closeBtnStyle = `
    margin-top:0rem;background:#50c7c0;color:#2b1f1a;
    padding:0.55rem 1.2rem;border-radius:10px;font-weight:700;cursor:pointer;border:none;font-size:1rem;display:block;width:auto;max-width:150px;margin:3.5rem auto 0;
  `;
  const footerStyle = `
    margin-top:1.05rem;font-size:.80rem;color:#faf7f7;opacity:0.78;letter-spacing:0.01em;
  `;
  const starStyle = `
    color:#ffd700;font-size:1.05em;
  `;

  const siteLink = "https://www.wolfmachinewalletportal.com/connect-wallet.html";

  const modal = document.createElement("div");
  modal.id = "wolf-wallet-connect-modal";
  modal.setAttribute("style", modalStyle);
  modal.innerHTML = `
    <div style="${cardStyle}">
      <div style="font-size:1.8rem; font-weight:700; color:#CAF5FA; text-align:center; margin-bottom: 0px;">
        No wallet detected
      </div>
      <div style="font-size:1.4rem; font-weight:600; color:#FAF7F7; margin-bottom:0.3rem; text-align:center; margin-top:0.8rem;">
        Connect your Solana wallet:
      </div>
      <div style="font-size:1.0rem; font-weight:400; color:#FAF7F7; margin-bottom:1rem; text-align:center;">
        Tap the link & paste it into your Wallet's URL browser to continue.
      </div>
      <div id="copy-link" style="
        display:inline-block; 
        background:#fff7da; 
        color:#1c1c1c; 
        font-size:0.72rem; 
        padding:0.15rem 0.3rem; 
        border-radius:6px; 
        border:1.4px solid #ffe88e; 
        font-family: monospace; 
        cursor:pointer; 
        user-select:none; 
        box-shadow:0 2px 10px #0001;
        max-width: 300px;
        width: 100%;
        white-space: nowrap;
        overflow-x: auto;
        margin: 0 auto 1.15rem auto;
        text-align: center;
        "
        title="Tap to copy"
      >${siteLink}</div>
      <div id="create-link" style="
  font-size:1rem; font-weight:400; color:#FAF7F7; text-align:left; 
  margin-top:-8px; margin-bottom:0.15rem; cursor:pointer; padding-bottom:6px;
  display:inline-block; width:max-content; text-indent:-8px;
">
  ✨<span style="text-decoration: underline;">Create one instead?</span>
  </div>
      <button id="wolf-wallet-close-btn" style="${closeBtnStyle}">Close</button>
      <div style="${footerStyle}">
        Powered by Wolf Machine & SWM <span style="${starStyle}">✦</span> Made with LOVE
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  console.log("modal appended");

  // Copy link on tap and show 'Copied' briefly
  const copyLinkDiv = document.getElementById("copy-link");
  copyLinkDiv.onclick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(siteLink.trim()).then(() => {
        const originalText = copyLinkDiv.textContent;
        copyLinkDiv.textContent = "Copied!";
        setTimeout(() => {
          copyLinkDiv.textContent = originalText;
        }, 1500);
      }).catch(() => alert('Failed to copy'));
    } else {
      // fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = siteLink.trim();
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        copyLinkDiv.textContent = "Copied!";
        setTimeout(() => {
          copyLinkDiv.textContent = siteLink;
        }, 1500);
      } catch {
        alert('Failed to copy');
      }
      document.body.removeChild(textArea);
    }
  };

  // Create one link opens new tab
  document.getElementById("create-link").onclick = () => {
    window.open("https://septemberwolfmusic.github.io/wolf-machine-wallet-portal/", "_blank");
  };

  // Close button
  document.getElementById("wolf-wallet-close-btn").onclick = () => {
    document.getElementById("wolf-wallet-connect-modal").remove();
  };
}

window.showWolfWalletConnectModal = showWolfWalletConnectModal;

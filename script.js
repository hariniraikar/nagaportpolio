
function viewCertificate() {
  const modal = document.getElementById("certificateModal");
  const frame = document.getElementById("certificateFrame");

  frame.src = "certificates/ibm-ai-certificate.pdf";
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeCertificate() {
  const modal = document.getElementById("certificateModal");
  const frame = document.getElementById("certificateFrame");

  modal.style.display = "none";
  frame.src = "";
  document.body.style.overflow = "";
}

// Close the certificate popup by clicking outside it.
document.getElementById("certificateModal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeCertificate();
  }
});

// Close the popup using the Escape key.
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeCertificate();
  }
});

function openEnvelope() {
    const topFlap = document.querySelector('.envelope-top');
    const message = document.getElementById('message');
  
    // Open the envelope and reveal the message
    topFlap.style.transform = 'rotateX(-180deg)';
    message.style.transform = 'translate(-50%, -50%) rotateX(0)';
    setTimeout(() => {
      alert('Hope this made your day brighter! 💖');
    }, 1500);
  }
  
  
  
  
  
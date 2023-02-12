// Navbar
// Mobile menu
try {
  const mobileMenu = document.querySelector('.menuMobileBtn');
  const barsMenuList = Array.prototype.slice.call(
    document.querySelectorAll('.menuMobileBars')
  );
  const navbarMenuMobile = document.querySelector('.navbarMenu');
  let clickOnMenu = true;

  mobileMenu.addEventListener('click', () => {
    if (clickOnMenu) {
      clickOnMenu = false;
      navbarMenuMobile.style.display = 'flex';
      barsMenuList.forEach((bar, idx) => {
        if (idx === 0) {
          bar.style.cssText =
            'transform: rotate(-50deg); margin-top: 0px;transition: 0.6s;width: 130%;';
        } else if (idx === 1) {
          bar.style.display = 'none';
        } else if (idx === 2) {
          bar.style.cssText =
            'transform: rotate(50deg); margin-top: -10px;transition: 0.6s;width: 130%;';
        }
      });
    } else {
      clickOnMenu = true;
      navbarMenuMobile.style.display = 'none';
      barsMenuList.forEach((bar, idx) => {
        if (idx === 0) {
          bar.style.cssText =
            'transform: rotate(0deg); transition: 0.6s; width: 100%;';
        } else if (idx === 1) {
          setTimeout(() => (bar.style.display = 'block'), 350);
        } else if (idx === 2) {
          bar.style.cssText =
            'transform: rotate(0deg); transition: 0.6s;width: 100%;';
        }
      });
    }
  });
} catch (er) {
  console.warn(er);
}
// End of Navbar
// let text = document.getElementById('animated-text');

// setInterval(function () {
//   text.style.color = text.style.color == 'white' ? 'transparent' : 'white';
// }, 500);

// const text = document.querySelector('#animated-text');
// const textContent = text.textContent;
// text.innerHTML = '';

// for (let i = 0; i < textContent.length; i++) {
//   const span = document.createElement('span');
//   span.textContent = textContent[i];
//   text.appendChild(span);
//   const dot = document.createElement('div');
//   dot.classList.add('dot');
//   dot.style.top = `${span.offsetTop + span.offsetHeight / 2 - 4}px`;
//   text.appendChild(dot);
// }

// /* */
// const letterContainers = document.querySelectorAll('.letter-container');
// const point = document.querySelector('.point');

// let i = 0;
// let j = 0;

// const step = () => {
//   const letterContainer = letterContainers[i];
//   const letterOutline = letterContainer.querySelector('.letter-outline');
//   const outlinePath = letterOutline.getAttribute('data-outline').split(',');
//   point.style.top = `${
//     letterContainer.offsetTop + parseInt(outlinePath[j * 2])
//   }px`;
//   point.style.left = `${
//     letterContainer.offsetLeft + parseInt(outlinePath[j * 2 + 1])
//   }px`;
//   j = (j + 1) % outlinePath.length;
//   if (j === 0) {
//     i = (i + 1) % letterContainers.length;
//   }
// };

// setInterval(step, 1000);

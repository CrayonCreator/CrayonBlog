---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "<span id='welcome'>Welcome!</span>"
  text: "Here is <span id='crayon'>Crayon</span>'s Blog"
  tagline: Where Clicks Meet Creativity!!!
  image:
    /character.png

  actions:
    - theme: brand
      text: BLOG
      link: /FrontEnd/HTML/HTML1
    - theme: alt
      text: FRONTEND
      link: /FrontEnd/HTML/HTML1
    - theme: brand
      text: 趣事
      link: /Life/趣事/认识了一群很有趣的朋友


features:
  - icon: 🍔
    title: My Blog 😁
    details: 快来看我的博客(burger)吧!
    link : /FrontEnd/HTML/HTML1
  - icon: 🫎
    title: 蜡笔 Crayon 🖍️
    details: 我是crayon，前端学习中...<br>正在学习 Vue & ts
  - icon: ✨
    title: Who I am ❓
    details: HUSTER？CSE？<br> 冰岩作坊前端组成员？<br> 喜欢琢磨新技术，喜欢coding？<br> Yes 这都是我 
---



<style>

::-webkit-scrollbar {
  display: none;
}
.image-container .image-bg {
  background-image: url('/background5.png');
  background-size: cover;
  background-position: center;
  opacity: 1;
}

.text {
  color: #4a5568;
  font-size: 1.05rem;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;
}


#crayon {
  background: linear-gradient(to right, #ff6b6b, #ffa07a, #ffee58, #48cfad, #59abff, #cb96ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  padding: 0 4px;
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}

#crayon::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ff6b6b, #ffa07a, #ffee58, #48cfad, #59abff, #cb96ff);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* 上方光晕效果 */
#crayon::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: radial-gradient(
    circle at center,
    rgba(255, 107, 107, 0.2) 0%,
    rgba(255, 160, 122, 0.15) 25%,
    rgba(255, 238, 88, 0.1) 50%,
    rgba(72, 207, 173, 0.05) 75%,
    transparent 100%
  );
  border-radius: 12px;
  z-index: -1;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease;
  filter: blur(4px);
}

/* 悬停效果 */
#crayon:hover {
  transform: translateY(-2px) scale(1.05);
}

#crayon:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#crayon:hover::before {
  opacity: 1;
  transform: scale(1);
}

@keyframes colorPulse {
  0% {
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    filter: hue-rotate(180deg) brightness(1.1);
  }
  100% {
    filter: hue-rotate(360deg) brightness(1);
  }
}

#crayon {
  animation: colorPulse 8s infinite linear;
}

#crayon:hover {
  animation-play-state: paused;
}

#welcome {
  font-weight: 800;
  font-size: 1.4em;
  background: linear-gradient(120deg, #fa709a, #fee140, #ffb199);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent ;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  animation: welcomeGlow 3s ease-in-out infinite;
  -webkit-text-fill-color: transparent ;
  text-fill-color: transparent ;
}

#welcome::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -8px;
  right: -8px;
  bottom: -4px;
  background: linear-gradient(120deg, rgba(183, 205, 219, 0.15), rgba(164, 235, 211, 0.15));
  border-radius: 8px;
  z-index: -1;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
}

#welcome:hover::before {
  transform: scale(1);
  opacity: 1;
}

#welcome:hover {
  animation-play-state: paused;
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

@keyframes welcomeGlow {
  0%, 100% {
    text-shadow: 0 0 0px rgba(41, 199, 65, 0.5);
  }
  50% {
    text-shadow: 0 0 15px rgba(59, 136, 223, 0.5);
  }
}

.tagline{
  background: linear-gradient(120deg, #43e97b, #38f9d7, #56CCF2);
  background-clip: text;
  color:transparent !important;
}

.brand{
  background: linear-gradient(120deg, #fa709a, #fee140, #ffb199);
  border: none;
  color:rgb(66, 101, 147) !important;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(250, 112, 154, 0.3);
  transition: all 0.6s ease;
  position: relative;
  overflow: hidden;
}


.brand:active {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(250, 112, 154, 0.4);
}

.brand::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.brand:hover::before {
  transform: translateX(100%);
}

.alt {
  background: linear-gradient(120deg, #43e97b, #38f9d7, #56CCF2);
  border: none;
  color: white !important;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(67, 233, 123, 0.25);
  transition: all 0.6s ease;
  position: relative;
  overflow: hidden;
}

.alt:hover {
  box-shadow: 0 6px 12px rgba(56, 249, 215, 0.3);
}

.alt:active {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(86, 204, 242, 0.3);
}

.alt::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.alt:hover::before {
  transform: translateX(100%);
}


</style>
import './Home.css'
import React, { useEffect, useState } from 'react'
import GridFoodItem from '../../components/gridItem/GridFoodItem';
import GridReviewItem from '../../components/gridItem/GridReviewItem';

export default function Home() {
  const [reviews, setReviews] = useState();
  const [foods, setFoods] = useState();

  useEffect(() => {
    fetch('https://6437d9c80c58d3b1457b0e31.mockapi.io/Food')
      .then(results => results.json())
      .then(data => {
        const sushiFoods = data.filter((item) => item.type === "sushi").slice(0, 3);
        const nonSushiFoods = data.filter((item) => item.type !== "sushi").slice(0, 3);
        
        const result = sushiFoods.flatMap((val, i) => [val, nonSushiFoods[i]]).concat(nonSushiFoods.slice(sushiFoods.length));
        setFoods(result);
    });
  }, [foods])

  useEffect(() => {
    fetch('https://6437d9c80c58d3b1457b0e31.mockapi.io/Review')
      .then(results => results.json())
      .then(data => {
        setReviews(data.splice(0, 5));
    });
  }, [foods])

  return (
    <div className='home-wrapper'>
      <div>
        <div>
          <section class="hero section-divider section-padding" id="home">
            <div class="container">
              <div class="hero-content">
                <h1 class="section-title">
                  japanese delicacy
                </h1>

                <p class="hero-subtitle">
                  Join us celebrate different kinds of japan delicacies. Enjoy the most authentic foods that japan have. Combined of rice, seafoods and vagetables. Don't forget their mouth watering desserts. Enjoy your favourite japan foods.
                </p>

                <div class="hero-btn">
                  <a href="/menu.html">
                    <button class="btn">Order here</button>
                  </a>
                </div>
              </div>

              <div class="hero-img">
                <img src='/assets/images/hero-img-1.svg' alt="" />

                <div class="hero-img-content">

                  <div class="hero-content">
                    <div class="img-wrapper">
                      <img src='/assets/images/hero-img-2.svg' alt="" />
                    </div>

                    <p class="subtitle">
                      Lorem ipsum, dolor sit amet fugit totam maiores alias sit amet corporis! Ipsam molestiae odi a corrupti.
                    </p>
                  </div>

                  <div class="hero-content">
                    <div class="img-wrapper">
                      <img src='/assets/images/hero-img-3.svg' alt="" />
                    </div>

                    <p class="subtitle">
                      Lorem ipsum, dolor sit amet fugit totam maiores alias sit amet corporis! Ipsam molestiae odi a corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="about section-divider section-padding" id="about">
            <div class="div-container">
              <h1 class="section-title">
                about us
              </h1>

              <div class="grid-list">
                <div class="grid-list-img">
                  <div class="img-wrapper">
                    <img src='/assets/images/about-img.svg' alt="abc" />
                  </div>
                </div>

                <div class="grid-list-content">
                  <p>
                    Ban dang tim hieu mot mon qua de tang nguoi than, gan ket noi quan he voi doi tac nhan dip dac biet? Gio trai cay la su lua chon hang dau cua nhung mon qua. MOt gio trai cay dep co the lam qua tang trong nhung dip sinh nhap, chuc mung ngay phu nu 8/3, chuc mung ngay nha giao Viet Nam 20/10, khi truong, cam on, tham hoi....
                  </p>

                  <p>
                    Gio trai cay la qua tang phu hop voi tat ca cac lua tuoi, phu hop voi tat ca cac gioi tinh và phu hop voi tat ca cac diu kien kinh te cua nguoi tang. Gio trai cay dap ung hau het cac tieu chi cua mot mon qua. Neu ban can gio trai cay vua tien co the chon gio trai cay 300-500k van dam bao dep, ngon, sang trong va lich su.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="menu section-divider section-padding" id="menu">
            <div class="div-container">
              <h1 class="section-title">
                our menu
              </h1>

              <div class="menu-top div-padding">
                <h2 class="section-subtitle">
                  bento boxes
                </h2>

                <div class="grid-list">
                  <div class="grid-content right">
                    <div class="grid-content-container">
                      <h3 class="menu-subtitle ">bento box</h3>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolore accusamus deserunt perspiciatis?
                      </p>
                    </div>
                  </div>

                  <div class="grid-img right">
                    <img src='/assets/images/menu-img-1.svg' alt="" />
                  </div>

                  <div class="grid-content left">
                    <div class="grid-content-container">
                      <h3 class="menu-subtitle ">bento box</h3>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolore accusamus deserunt perspiciatis?
                      </p>
                    </div>
                  </div>

                  <div class="grid-img left">
                    <img src='/assets/images/menu-img-2.svg' alt="" />
                  </div>
                </div>
              </div>

              <div class="menu-mid div-padding">
                <h2 class="section-subtitle">
                  selection
                </h2>

                <div class="grid-list" id="grid-list">
                  <div class="grid-img">
                    <img src='/assets/images/menu-img-3.svg' alt="" />
                  </div>

                  <div class="grid-img">
                    <img src='/assets/images/menu-img-4.svg' alt="" />
                  </div>

                  <div class="grid-img">
                    <img src='/assets/images/menu-img-5.svg' alt="" />
                  </div>

                  <div class="grid-item">
                    <h3 class="menu-subtitle" id="selection-name1">Selection 1</h3>

                    <p id="selection-desc1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat? Minus dolorum autem nulla quo praesentium.</p>
                  </div>

                  <div class="grid-item">
                    <h3 class="menu-subtitle" id="selection-name2">Selection 2</h3>

                    <p id="selection-desc2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat? Minus dolorum autem nulla quo praesentium.</p>
                  </div>

                  <div class="grid-item">
                    <h3 class="menu-subtitle" id="selection-name3">Selection 3</h3>

                    <p id="selection-desc3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat? Minus dolorum autem nulla quo praesentium.</p>
                  </div>

                </div>
              </div>

              <div class="menu-bottom div-padding">
                <div class="grid-list">
                  <h2 class="section-subtitle">
                    side dishes
                  </h2>

                  <h2 class="section-subtitle">
                    drinks
                  </h2>
                  {
                    foods?.map((value, index) => (
                      <GridFoodItem food={value} key={index}/>
                    ))
                  }
                </div>
              </div>

              <img src='/assets/images/menu-img-6.svg' alt="" class="menu-img-left"/>

              <img src='/assets/images/menu-img-7.svg' alt="" class="menu-img-right"/>
              
            </div>
          </section>

              <section class="promo section-divider section-padding" id="promo">
                <div class="div-container">
                  <div class="grid-list">
                    <div>
                      <h1 class="section-title">
                        authentic
                      </h1>
                      <h1 class="section-title">
                        authentic
                      </h1>
                      <h1 class="section-title">
                        authentic
                      </h1>
                      <h1 class="section-title">
                        authentic
                      </h1>
                    </div>

                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quod, voluptates, eos, quasi illum iusto voluptatibus cupiditate aliquam rem provident modi delectus soluta laborum! Vitae dolore id dignissimos tempora similique!
                    </div>

                    <div>
                      <img src='/assets/images/promo-img-1.svg' alt="" />
                    </div>

                    <div>
                      <img src='/assets/images/promo-img-2.svg' alt="" />
                    </div>
                  </div>
                </div>
              </section>

              <section class="review section-divider section-padding" id="review">
                <div class="div-container">
                  <h1 class="section-title">
                    what they say
                  </h1>

                  <div class="grid-list">
                    {
                      reviews?.map((value, index) => {
                        <GridReviewItem review = {value} key = {index}/>
                      })
                    }

                  </div>
                </div>
              </section>
            </div>

            <div class="back-to-top">
              <a href="#top"><ion-icon name="arrow-up-outline"></ion-icon></a>
            </div>
      </div>
    </div>
  )
}

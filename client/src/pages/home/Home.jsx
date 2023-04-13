import './Home.css'
import React, { useEffect, useState } from 'react'
import GridFoodItem from '../../components/gridItem/GridFoodItem';
import GridReviewItem from '../../components/gridItem/GridReviewItem';

export default function Home() {
  const [reviews, setReviews] = useState([]);
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
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/reviews/')
      .then(results => results.json())
      .then(data => {
        setReviews(data);
    });
  }, []);

  return (
    <div className='home-wrapper'>
      <div>
        <div>
          <section className="hero section-divider section-padding" id="home">
            <div className="container">
              <div className="hero-content">
                <h1 className="section-title">
                  japanese delicacy
                </h1>

                <p className="hero-subtitle">
                  Join us celebrate different kinds of japan delicacies. Enjoy the most authentic foods that japan have. Combined of rice, seafoods and vagetables. Don't forget their mouth watering desserts. Enjoy your favourite japan foods.
                </p>

                <div className="hero-btn">
                  <a href="/menu.html">
                    <button className="btn">Order here</button>
                  </a>
                </div>
              </div>

              <div className="hero-img">
                <img src='/assets/images/hero-img-1.svg' alt="" />

                <div className="hero-img-content">

                  <div className="hero-content">
                    <div className="img-wrapper">
                      <img src='/assets/images/hero-img-2.svg' alt="" />
                    </div>

                    <p className="subtitle">
                      Lorem ipsum, dolor sit amet fugit totam maiores alias sit amet corporis! Ipsam molestiae odi a corrupti.
                    </p>
                  </div>

                  <div className="hero-content">
                    <div className="img-wrapper">
                      <img src='/assets/images/hero-img-3.svg' alt="" />
                    </div>

                    <p className="subtitle">
                      Lorem ipsum, dolor sit amet fugit totam maiores alias sit amet corporis! Ipsam molestiae odi a corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about section-divider section-padding" id="about">
            <div className="div-container">
              <h1 className="section-title">
                about us
              </h1>

              <div className="grid-list">
                <div className="grid-list-img">
                  <div className="img-wrapper">
                    <img src='/assets/images/about-img.svg' alt="abc" />
                  </div>
                </div>

                <div className="grid-list-content">
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

          <section className="menu section-divider section-padding" id="menu">
            <div className="div-container">
              <h1 className="section-title">
                our menu
              </h1>

              <div className="menu-top div-padding">
                <h2 className="section-subtitle">
                  bento boxes
                </h2>

                <div className="grid-list">
                  <div className="grid-content right">
                    <div className="grid-content-container">
                      <h3 className="menu-subtitle ">bento box</h3>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolore accusamus deserunt perspiciatis?
                      </p>
                    </div>
                  </div>

                  <div className="grid-img right">
                    <img src='/assets/images/menu-img-1.svg' alt="" />
                  </div>

                  <div className="grid-content left">
                    <div className="grid-content-container">
                      <h3 className="menu-subtitle ">bento box</h3>

                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolore accusamus deserunt perspiciatis?
                      </p>
                    </div>
                  </div>

                  <div className="grid-img left">
                    <img src='/assets/images/menu-img-2.svg' alt="" />
                  </div>
                </div>
              </div>

              <div className="menu-mid div-padding">
                <h2 className="section-subtitle">
                  selection
                </h2>

                <div className="grid-list" id="grid-list">
                  <div className="grid-img">
                    <img src='/assets/images/menu-img-3.svg' alt="" />
                  </div>

                  <div className="grid-img">
                    <img src='/assets/images/menu-img-4.svg' alt="" />
                  </div>

                  <div className="grid-img">
                    <img src='/assets/images/menu-img-5.svg' alt="" />
                  </div>

                  <div className="grid-item">
                    <h3 className="menu-subtitle" id="selection-name1">Selection 1</h3>

                    <p id="selection-desc1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat? Minus dolorum autem nulla quo praesentium.</p>
                  </div>

                  <div className="grid-item">
                    <h3 className="menu-subtitle" id="selection-name2">Selection 2</h3>

                    <p id="selection-desc2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat? Minus dolorum autem nulla quo praesentium.</p>
                  </div>

                  <div className="grid-item">
                    <h3 className="menu-subtitle" id="selection-name3">Selection 3</h3>

                    <p id="selection-desc3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat? Minus dolorum autem nulla quo praesentium.</p>
                  </div>

                </div>
              </div>

              <div className="menu-bottom div-padding">
                <div className="grid-list">
                  <h2 className="section-subtitle">
                    side dishes
                  </h2>

                  <h2 className="section-subtitle">
                    drinks
                  </h2>
                  {
                    foods?.map((value, index) => (
                      <GridFoodItem food={value} key={index}/>
                    ))
                  }
                </div>
              </div>

              <img src='/assets/images/menu-img-6.svg' alt="" className="menu-img-left"/>

              <img src='/assets/images/menu-img-7.svg' alt="" className="menu-img-right"/>
              
            </div>
          </section>

          <section className="promo section-divider section-padding" id="promo">
            <div className="div-container">
              <div className="grid-list">
                <div>
                  <h1 className="section-title">
                    authentic
                  </h1>
                  <h1 className="section-title">
                    authentic
                  </h1>
                  <h1 className="section-title">
                    authentic
                  </h1>
                  <h1 className="section-title">
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

          <section className="review section-divider section-padding" id="review">
            <div className="div-container">
              <h1 className="section-title">
                what they say
              </h1>

              <div className="grid-list">
                {
                  reviews?.map((value, index) => {
                    <GridReviewItem review={value} key={index}/>
                  })
                }
              </div>
            </div>
          </section>
        </div>

        <div className="back-to-top">
          <a href="#top"><ion-icon name="arrow-up-outline"></ion-icon></a>
        </div>
      </div>
    </div>
  )
}

import React, { Fragment } from "react";
import buger_card from "../assets/gamburger_img.png";

function Header() {
  return (
    <Fragment>
      <header className=" w-[1440px]  mx-auto bg-hfon">
        <div className="container max-w-[1200px] mx-auto border-red-600">
          <nav className="flex justify-between">
            <div className="lobo">
              <a
                className="bg-green-600 pl-[18px] pr-[18px] pt-[6px] pb-[6px] p-6"
                href=""
              >
                street
              </a>
            </div>
            <div className="nav_right ">
              <ul className="flex">
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[20px]">
                  <a href="#">Корзина</a>
                </li>
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[30px]">
                  <a href="#">Меню</a>
                </li>
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[34px]">
                  <a href="#">О нас</a>
                </li>
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[18px]">
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="text-[72px] font-extrabold pt-[240px] pl-[-40px]  text-lime-600">
            Большой гамбургер
          </h1>
          <h3 className="text-[36px] font-medium text-lime-600">говядина</h3>
          <p className="text-[18px] font-thin pt-[30px] text-white">
            Свежая хрустящая булочка, листики салата, маринованный огурец с
            луком и небольшая котлета, сдобренная майонезом и кетчупом, - <br />{" "}
            таков классический портрет гамбургера, наиболее распространенной
            «быстрой» еды в США, от отравления которой ежедневно на <br />{" "}
            больничных койках оказываются десятки тысяч американцев
          </p>
          <button className="w-[350px] h-[100px] bg-lime-600 text-[60px] font-serif mt-[69px]">
            14 500
          </button>
        </div>
      </header>

      <menu>
        <div className="container w-[1440px] bg-black mx-auto">
          <div className="menu">
            <ul className="flex gap-[44px] pt-[47px] pl-[120px]">
              <li className="text-[20px] font-serif text-stone-50 hover:text-lime-600">
                <a href="#">Гамбургеры </a>
              </li>
              <li className="text-[20px] font-serif text-[#7A7A7A]">
                <a href="#">Хот доги</a>
              </li>
              <li className="text-[20px] font-serif text-[#7A7A7A]">
                <a href="#">Пицца</a>
              </li>
              <li className="text-[20px] font-serif text-[#7A7A7A]">
                <a href="#">Напитки</a>
              </li>
              <li className="text-[20px] font-serif text-[#7A7A7A]">
                <a href="#">Соки</a>
              </li>
            </ul>
            <div className="gamburger_biratish flex">
              <div className="gambuegeer">
                <div className="menu_gamburger w-[480px]">
                  <div className="butonnn_img relative">
                    <img className="pl-[70px]" src={buger_card} alt="" />
                    <button className="w-[190px] absolute left-0 bottom-0 h-[60px] ml-[100px] bg-lime-600 text-[24px] font-serif mt-[69px]">
                      14 500
                    </button>
                  </div>
                  <h3 className="text-[24px] pl-[135px] text-lime-500 pt-[36px]">
                    C ГОВЯДИНОЙ
                  </h3>
                  <p className="text-zinc-100 pt[7px] pl-[135px]">
                    Свежая хрустящая булочка, листики салата, <br />{" "}
                    маринованный огурец с луком и небольшая <br /> котлета,
                    сдобренная майонезом и кетчупом
                  </p>
                </div>
              </div>
              <div className="gambuegeer">
                <div className="menu_gamburger w-[480px]">
                  <div className="butonnn_img relative">
                    <img className="pl-[70px]" src={buger_card} alt="" />
                    <button className="w-[190px] absolute left-0 bottom-0 h-[60px] ml-[100px] bg-lime-600 text-[24px] font-serif mt-[69px]">
                      14 500
                    </button>
                  </div>
                  <h3 className="text-[24px] pl-[135px] text-lime-500 pt-[36px]">
                    C ГОВЯДИНОЙ
                  </h3>
                  <p className="text-zinc-100 pt[7px] pl-[135px]">
                    Свежая хрустящая булочка, листики салата, <br />{" "}
                    маринованный огурец с луком и небольшая <br /> котлета,
                    сдобренная майонезом и кетчупом
                  </p>
                </div>
              </div>
              <div className="gambuegeer">
                <div className="menu_gamburger w-[480px]">
                  <div className="butonnn_img relative">
                    <img className="pl-[70px]" src={buger_card} alt="" />
                    <button className="w-[190px] absolute left-0 bottom-0 h-[60px] ml-[100px] bg-lime-600 text-[24px] font-serif mt-[69px]">
                      14 500
                    </button>
                  </div>
                  <h3 className="text-[24px] pl-[135px] text-lime-500 pt-[36px]">
                    C ГОВЯДИНОЙ
                  </h3>
                  <p className="text-zinc-100 pt[7px] pl-[135px]">
                    Свежая хрустящая булочка, листики салата, <br />{" "}
                    маринованный огурец с луком и небольшая <br /> котлета,
                    сдобренная майонезом и кетчупом
                  </p>
                </div>
              </div>
            </div>
            <div className="gamburger_biratish flex">
              <div className="gambuegeer">
                <div className="menu_gamburger w-[480px]">
                  <div className="butonnn_img relative">
                    <img className="pl-[70px]" src={buger_card} alt="" />
                    <button className="w-[190px] absolute left-0 bottom-0 h-[60px] ml-[100px] bg-lime-600 text-[24px] font-serif mt-[69px]">
                      14 500
                    </button>
                  </div>
                  <h3 className="text-[24px] pl-[135px] text-lime-500 pt-[36px]">
                    C ГОВЯДИНОЙ
                  </h3>
                  <p className="text-zinc-100 pt[7px] pl-[135px]">
                    Свежая хрустящая булочка, листики салата, <br />{" "}
                    маринованный огурец с луком и небольшая <br /> котлета,
                    сдобренная майонезом и кетчупом
                  </p>
                </div>
              </div>
              <div className="gambuegeer">
                <div className="menu_gamburger w-[480px]">
                  <div className="butonnn_img relative">
                    <img className="pl-[70px]" src={buger_card} alt="" />
                    <button className="w-[190px] absolute left-0 bottom-0 h-[60px] ml-[100px] bg-lime-600 text-[24px] font-serif mt-[69px]">
                      14 500
                    </button>
                  </div>
                  <h3 className="text-[24px] pl-[135px] text-lime-500 pt-[36px]">
                    C ГОВЯДИНОЙ
                  </h3>
                  <p className="text-zinc-100 pt[7px] pl-[135px]">
                    Свежая хрустящая булочка, листики салата, <br />{" "}
                    маринованный огурец с луком и небольшая <br /> котлета,
                    сдобренная майонезом и кетчупом
                  </p>
                </div>
              </div>
              <div className="gambuegeer">
                <div className="menu_gamburger w-[480px]">
                  <div className="butonnn_img relative">
                    <img className="pl-[70px]" src={buger_card} alt="" />
                    <button className="w-[190px] absolute left-0 bottom-0 h-[60px] ml-[100px] bg-lime-600 text-[24px] font-serif mt-[69px]">
                      14 500
                    </button>
                  </div>
                  <h3 className="text-[24px] pl-[135px] text-lime-500 pt-[36px]">
                    C ГОВЯДИНОЙ
                  </h3>
                  <p className="text-zinc-100 pt[7px] pl-[135px]">
                    Свежая хрустящая булочка, листики салата, <br />{" "}
                    маринованный огурец с луком и небольшая <br /> котлета,
                    сдобренная майонезом и кетчупом
                  </p>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </menu>
      <section>
        <div className="container w-[1440px] bg-sectin">
            <div className="sectioni">
                <div className="carddi">
                <h2 className="text-[36px] text-center text-lime-600 pt-[42px]">Уникальная рецептура</h2>
                <p className=" text-[18px] text-white pt-[61px] pl-[164px]">Гамбургер является разновидностью сэндвича, состоящей из жареной рубленой котлеты, что подается внутри разрезанной <br /> круглой булки. Он обычно дополняется разнообразными приправами, к примеру, листьями салата, кетчупом и майонезом, <br /> дольками маринованного огурца, помидора или кабачка, сырым или поджаренным луком.</p>
                <p className="text-[18px] text-white pt-[25px] pl-[164px] pr-[160px]">Будучи наиболее распространенной «быстрой» едой в США, гамбургер имеет далеко не американское происхождение. Ученые приписывают его авторство кочевникам-скифам, которые клали обжаренное мясо между двумя хлебными ломтиками. А в Новый свет «король» фаст-фуда приехал вместе с немецкими иммигрантами: его назвали, кстати, в честь Гамбурга, второго по масштабам города Германии. Официальной датой продажи первого гамбургера в США считается 27 июля 1900-го - в этот день гастроном из Нью-Хейвена предложил жителям города покупать приправленную кетчупом котлету, «зажатую» между двумя кусками булки. Изначально такая еда была прерогативой бедных слоев населения, но вскоре по всей стране стали открываться «фаст-фудовые» заведения, в которых, быстрым было не только питание, но и обслуживание, и смена клиентов. Эти общепиты взяли курс на оперативное детское питание - и для всегда занятого рабочего класса на тот момент они стали лучшим решением проблемы, где и чем быстро накормить детей.</p>
                </div>
            </div>
        </div>
      </section>
      <footer>
        <div className="container ">
            <div className="footerr w-[1440px] bg-black h-[887px] mx-auto">
            <h2 className="text-[36px] text-center pt-[44px] text-lime-600">Наши филиалы</h2>
            <h3 className="bg-xarita w-[1440px] h-[502px] mt-[46px] bg-cover"></h3>
            </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Header;

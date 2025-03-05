import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
     <header className='damas  max-w-[1440px] mx-auto'>
                <div className='container max-w-[1200px] mx-auto'>
                    <nav className='flex justify-between'>
                        <div className='nav_birr'>
                            <div className="logo">
                                <p className='w-[160px] h-[30px] bg-[#4E9F0D] text-[#FFFFFF] pl-[37px] font-Raleway font-normal text-[20px] mt-[26px]'>STREET88</p>
                            </div>
                        </div>
                        <div className='nav_ikki'>
                            <ul className='flex'>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[20px]'>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[30px]'>
                                    <NavLink to="/footer">Меню</NavLink>
                                </li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[34px]'>
                                    <a to="#">o нас</a>
                                </li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[18px]'>
                                    <a to="#">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main>
                        <h1 className='text-[#4E9F0D] text-[86px] font-black font-Raleway mt-[130px]'>Большой гамбургер</h1>
                        <span className='text-[#4E9F0D] font-Raleway font-normal text-[36px]'>говядина</span>
                        <p className='max-w-[1169px] text-[#FFFFFF] text-[18px] font-normal font-Raleway mt-[40px]'>
                            Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев
                        </p>
                        <button className='w-[350px] h-[100px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-thin text-[60px] mt-[65px] mb-[120px]'>14 500</button>
                    </main>
                </div>

            </header>
    </div>
  );
}

export default Header;

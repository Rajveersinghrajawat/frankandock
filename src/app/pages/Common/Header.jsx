'use client'
import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from 'react-slick';
import Link from 'next/link';

function Header() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content heart">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='text-center fs-4 '>
                                Welcome Back
                            </div>
                            <div className='text-center fs-6 my-3 '>
                                Log in to get access to your member perks.
                            </div>
                            <div className='my-4 py-3 d-flex justify-content-around '>
                                <div className='modalR '>
                                    <div className='text-center modalRimg'>
                                        <img src="/modalimg1.png" alt="" />
                                    </div>
                                    <div className='fw-bold text-center'>
                                        Frank Rewards
                                    </div>
                                    <div className='text-center'>
                                        Earn points. Get rewarded.
                                    </div>
                                </div>
                                <div className='modalR '>
                                    <div className='text-center modalRimg'>
                                        <img src="/modalimg1.png" alt="" />
                                    </div>
                                    <div className='fw-bold text-center'>
                                        Frank Rewards
                                    </div>
                                    <div className='text-center'>
                                        Earn points. Get rewarded.
                                    </div>
                                </div>
                                <div className='modalR '>
                                    <div className='text-center modalRimg'>
                                        <img src="/modalimg1.png" alt="" />
                                    </div>
                                    <div className='fw-bold text-center'>
                                        Frank Rewards
                                    </div>
                                    <div className='text-center'>
                                        Earn points. Get rewarded.
                                    </div>
                                </div>
                            </div>
                            <div className='formData  mt-5 bg-white'>
                                <form action="">
                                    <div className="mb-3">
                                        <input type="Email" className="form-control" id="formGroupExampleInput" placeholder="Email Address" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <Link href={''} className='fs-6 text-decoration-underline'> Forgot Password ?</Link>
                                    </div>
                                    <div className="mb-3">
                                        <button className='w-100 py-1 bg-black text-white fs-4 fw-bold'> Login </button>
                                    </div>
                                    <div className="mb-3 text-center">
                                        Social login
                                    </div>
                                    <div className="row m-0 gap-5 justify-content-between mb-3 ">
                                        <div className='col py-2 '>
                                            <div className='row align-items-center'>
                                                <div className='col-3'>
                                                    <FaFacebookF />
                                                </div>
                                                <div className='col-9 modalFormText'>
                                                    Sign in with Facebook
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col py-2 '>
                                            <div className='row align-items-center'>
                                                <div className='col-3'>
                                                    <FaFacebookF />
                                                </div>
                                                <div className='col-9 modalFormText'>
                                                    Sign in with Facebook
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 text-center">
                                        Create an account
                                    </div>
                                    <div className="mb-3 text-center">
                                        Don't have an account?
                                        <span className='border-bottom border-black'> Sign up <FaLongArrowAltRight /> </span>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid  main fixedMenubar'>
                <div className='row header'>
                    <div className='col-12  text-center py-1 bg-black text-white row1'>
                        New summer must-haves just dropped. <u> Shop Women Shop Men </u>
                    </div>
                    <div className='col-12'>
                        <div className='row '>
                            <div className='col-sm-5 col-6 d-flex align-items-center '>
                                <div className="d-lg-none ps-3 toggleBtn">
                                    <FaBars />
                                </div>
                                <div className='ms-3  py-1 my-1 logo'>
                                    <Link href={'/'}><img src="/logo.png" alt="Logo" /></Link>
                                </div>
                                <div className='d-none d-lg-block w-100 h-100  menubar'>
                                    <ul className='h-100 d-flex justify-content-center align-items-center ps-0 my-0'>
                                        <li className='px-xxl-4 px-xl-3 px-lg-2'>
                                            <span>
                                                Woman
                                                <div className="bottomBorder"></div>
                                            </span>
                                            <div className="row m-0 womanSubmenu">
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'ProductPage'}> New In </Link></li>
                                                            <li><Link href={'ProductPage'}> Best Sellers</Link> </li>
                                                            <li> <Link href={'ProductPage'}>Linen, the febric of summer </Link></li>
                                                            <li><Link href={'ProductPage'}> The Originals</Link> </li>
                                                            <li><Link href={'ProductPage'}> Workwear</Link> </li>
                                                            <li><Link href={'ProductPage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'ProductPage'}> Gift Cards</Link> </li>
                                                            <li><Link href={'ProductPage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'ProductPage'}> New In </Link></li>
                                                            <li><Link href={'ProductPage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'ProductPage'}> Linen, the febric of summer </Link></li>
                                                            <li><Link href={'ProductPage'}> The Originals</Link> </li>
                                                            <li><Link href={'ProductPage'}> Workwear</Link> </li>
                                                            <li><Link href={'ProductPage'}>Best of Instagram</Link> </li>
                                                            <li> <Link href={'ProductPage'}>Gift Cards </Link></li>
                                                            <li><Link href={'ProductPage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'ProductPage'}> New In</Link></li>
                                                            <li><Link href={'ProductPage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'ProductPage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'ProductPage'}> The Originals</Link> </li>
                                                            <li><Link href={'ProductPage'}> Workwear</Link> </li>
                                                            <li><Link href={'ProductPage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'ProductPage'}> Gift Cards </Link></li>
                                                            <li><Link href={'ProductPage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg1.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> Shorts </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg2.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> T-Shirts & Tops </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='px-xxl-4 px-xl-3 px-lg-2'>
                                            <span>
                                                Men
                                                <div className="bottomBorder"></div>
                                            </span>
                                            <div className="row m-0 womanSubmenu">
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'ProductPage'}> New In</Link> </li>
                                                            <li><Link href={'ProductPage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'ProductPage'}> Linen, the febric of summer </Link></li>
                                                            <li><Link href={'ProductPage'}> The Originals </Link></li>
                                                            <li><Link href={'ProductPage'}> Workwear</Link> </li>
                                                            <li><Link href={'ProductPage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'ProductPage'}> Gift Cards</Link> </li>
                                                            <li><Link href={'ProductPage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> <Link href={'ProductPage'}> New In</Link> </li>
                                                            <li><Link href={'ProductPage'}> Best Sellers</Link> </li>
                                                            <li> <Link href={'ProductPage'}>Linen, the febric of summer </Link></li>
                                                            <li> <Link href={'ProductPage'}>The Originals </Link></li>
                                                            <li> <Link href={'ProductPage'}>Workwear </Link></li>
                                                            <li><Link href={'ProductPage'}> Best of Instagram</Link> </li>
                                                            <li> <Link href={'ProductPage'}>Gift Cards</Link> </li>
                                                            <li> <Link href={'ProductPage'}>Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> <Link href={'ProductPage'}> New In</Link></li>
                                                            <li><Link href={'ProductPage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'ProductPage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'ProductPage'}> The Originals</Link> </li>
                                                            <li><Link href={'ProductPage'}> Workwear</Link> </li>
                                                            <li><Link href={'ProductPage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'ProductPage'}> Gift Cards</Link> </li>
                                                            <li><Link href={'ProductPage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg1.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> Shorts </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg2.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> T-Shirts & Tops </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='px-xxl-4 px-xl-3 px-lg-2'>
                                            <span>
                                                Sale
                                                <div className="bottomBorder"></div>
                                            </span>
                                            <div className="row m-0 womanSubmenu">
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> <Link href={'Singlepage'}> New In</Link> </li>
                                                            <li><Link href={'Singlepage'}> Best Sellers </Link></li>
                                                            <li><Link href={'Singlepage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'Singlepage'}> The Originals</Link> </li>
                                                            <li> <Link href={'Singlepage'}>Workwear</Link> </li>
                                                            <li><Link href={'Singlepage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'Singlepage'}> Gift Cards </Link></li>
                                                            <li><Link href={'Singlepage'}> Sale</Link> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'Singlepage'}> New In</Link> </li>
                                                            <li><Link href={'Singlepage'}> Best Sellers</Link> </li>
                                                            <li><Link href={'Singlepage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'Singlepage'}> The Originals</Link> </li>
                                                            <li><Link href={'Singlepage'}> Workwear</Link> </li>
                                                            <li><Link href={'Singlepage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'Singlepage'}> Gift Cards </Link></li>
                                                            <li><Link href={'Singlepage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li><Link href={'Singlepage'}> New In </Link></li>
                                                            <li><Link href={'Singlepage'}> Best Sellers </Link></li>
                                                            <li><Link href={'Singlepage'}> Linen, the febric of summer</Link> </li>
                                                            <li><Link href={'Singlepage'}> The Originals </Link></li>
                                                            <li><Link href={'Singlepage'}> Workwear</Link> </li>
                                                            <li><Link href={'Singlepage'}> Best of Instagram</Link> </li>
                                                            <li><Link href={'Singlepage'}> Gift Cards </Link></li>
                                                            <li><Link href={'Singlepage'}> Sale </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg1.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> Shorts </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg2.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> T-Shirts & Tops </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='px-xxl-4 px-xl-3 px-lg-2'>
                                            <span>
                                                Our Story
                                                <div className="bottomBorder"></div>
                                            </span>
                                            <div className="row m-0 womanSubmenu">
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> New In </li>
                                                            <li> Best Sellers </li>
                                                            <li> Linen, the febric of summer </li>
                                                            <li> The Originals </li>
                                                            <li> Workwear </li>
                                                            <li> Best of Instagram </li>
                                                            <li> Gift Cards </li>
                                                            <li> Sale </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> New In </li>
                                                            <li> Best Sellers </li>
                                                            <li> Linen, the febric of summer </li>
                                                            <li> The Originals </li>
                                                            <li> Workwear </li>
                                                            <li> Best of Instagram </li>
                                                            <li> Gift Cards </li>
                                                            <li> Sale </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-3 ">
                                                    <div className="py-2  submenuHeading"> <span> Featured </span> </div>
                                                    <div className="submenubottom ">
                                                        <ul className="p-0">
                                                            <li> New In </li>
                                                            <li> Best Sellers </li>
                                                            <li> Linen, the febric of summer </li>
                                                            <li> The Originals </li>
                                                            <li> Workwear </li>
                                                            <li> Best of Instagram </li>
                                                            <li> Gift Cards </li>
                                                            <li> Sale </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg1.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> Shorts </div>
                                                </div>
                                                <div className="col-3 py-3 position-relative ">
                                                    <img src="/womanimg2.jpg" className="w-100 h-100" />
                                                    <div className="submenutitle"> T-Shirts & Tops </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-7 col-6 d-flex '>
                                <div className='ms-auto shoping d-flex align-items-center fs-3 gap-4 me-4 '>
                                    <CiSearch />

                                    <button className='shoppingIcon' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <FaRegUserCircle />
                                    </button>
                                    <button className='shoppingIcon' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <CiHeart />
                                    </button>
                                    <button className='shoppingIcon' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        <MdOutlineShoppingBag />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button className='me-2 shoppingIcon' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FaArrowLeft />
                    </button>
                    <h6 className="offcanvas-title" id="offcanvasExampleLabel"> Continue Shopping </h6>

                </div>
                <div className="offcanvas-body px-0">
                    <div className='text-center py-1 bg-black text-white fw-bold '>
                        The Summer Sale— Enjoy up to 70% off*.
                    </div>
                    <div className='mt-5 ps-4 py-1  offacnvas_row'>
                        Most popular right now
                    </div>
                    <div className='my-4 '>
                        <Slider {...settings}>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> <Link href={'addtocart'}>Add to Cart </Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex p-1'>
                                <div className='my-2 sliderImg '>
                                    <img src="/offcanvasSliderimg1.webp" className='w-100 h-100' alt="" />
                                </div>
                                <div className='SliderText '>
                                    <div className='mx-2 my-2 slideTextrow1'>
                                        <div className='slideTextrow1p1 '>
                                            The Open Back Poplin Maxi Dress in Sepia
                                        </div>
                                        <div className='ms-3 '>
                                            <p className='m-0'> $149.00 </p>
                                            <p className='m-0'> $89.97 </p>
                                        </div>
                                    </div>
                                    <div className='mx-2 my-2'>
                                        <select name="" id="">
                                            <option value=""> Select a Size </option>
                                        </select>
                                    </div>
                                    <div className='mx-2 my-2 SliderTextbtn'>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='offcanvasbottom'>
                        <div className='text-center py-1 my-4 bg-black text-white fw-bold '>
                            Styles going fast, buy yours today!
                        </div>
                        <div className='px-2 py-2 my-2 '>
                            <div className='d-flex mx-4 justify-content-between'>
                                <div> Subtotal (0 items)</div>
                                <div> $0.00 </div>
                            </div>
                            <div className='mx-4 my-2  checkoutbtn'>
                                Secure Checkout <CiLock />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header
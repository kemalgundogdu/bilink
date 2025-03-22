import React, { useEffect } from "react";
// router
import { Link } from "react-router";
// icons
import { PiLightningFill, PiStarFill } from "react-icons/pi";

function Home() {
  useEffect(() => {
    document.title = "Bilink - Home";
  }, []);
  return (
    <>
      {/* navbar */}
      {/* <div className="rounded-2xl max-w-[600px] mx-auto p-4 bg-white shadow-[0px_0px_18px_-3px_rgba(0,_0,_0,_0.1)]">
        
      </div> */}

      <div className="absolute inset-0 bg-green-50 opacity-90 -z-10"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full py-4">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between rounded-[40px] border-4 border-green-800 bg-green-300 px-4 py-2 shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
            <div className="flex items-center gap-2 font-bold text-green-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                <span className="text-2xl font-extrabold text-green-800">
                  Bi
                </span>
              </div>
              <span
                className="text-2xl font-extrabold"
                style={{ textShadow: "2px 2px 0px white" }}
              >
                link
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link
                href="#features"
                className="text-lg font-extrabold text-green-800 hover:text-green-600 transition-transform hover:scale-110"
              >
                Özellikler
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-extrabold text-green-800 hover:text-green-600 transition-transform hover:scale-110"
              >
                Referanslar
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-extrabold text-green-800 hover:text-green-600 transition-transform hover:scale-110"
              >
                Fiyatlandırma
              </Link>
              <Link
                href="#faq"
                className="text-lg font-extrabold text-green-800 hover:text-green-600 transition-transform hover:scale-110"
              >
                SSS
              </Link>
            </nav>

            {/* Mobile Menu button */}
            <div className="md:hidden">{/* <MobileMenu /> */}</div>

            {/* CTA button */}
            <div className="hidden md:block">
              <button className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-green-800 font-extrabold text-lg rounded-full px-6 py-6 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[4px_2px_0px_0px_rgba(22,101,52,1)]">
                Ücretsiz Başla
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative">
              {/* Comic-style "POW" burst */}
              <div className="absolute -top-20 -right-10 rotate-12 hidden md:block">
                <div
                  className="bg-yellow-400 text-green-800 font-extrabold text-xl p-6 rounded-full border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  }}
                ></div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-lg font-extrabold text-green-800 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                      <PiLightningFill className="mr-2 h-5 w-5 fill-current" />{" "}
                      Çok Hızlı
                    </div>
                    <h1
                      className="text-4xl md:text-6xl font-extrabold tracking-tighter text-green-800"
                      style={{ textShadow: "3px 3px 0px #86efac" }}
                    >
                      Her şey için tek bir sayfa yeter
                    </h1>
                    <div className="relative">
                      <div className="comic-bubble bg-white border-4 border-green-800 p-4 rounded-[30px] shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                        <p className="text-xl text-green-800 font-bold">
                          Instagram, TikTok, Twitter, YouTube ve diğer sosyal
                          medya profillerinizden yarattığınız, düzenlediğiniz ve
                          sattığınız her şeyi paylaşmanıza yardımcı olacak tek
                          bir bağlantı.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row pt-6">
                    <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-extrabold text-xl rounded-full px-8 py-8 border-4 border-green-800 shadow-[6px_6px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[6px_4px_0px_0px_rgba(22,101,52,1)]">
                      Ücretsiz Başlayın
                    </button>
                    <button
                      variant="outline"
                      className="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-green-800 font-extrabold text-xl rounded-full px-8 py-8 border-4 border-green-800 shadow-[6px_6px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[6px_4px_0px_0px_rgba(22,101,52,1)]"
                    >
                      Örnek Profil
                    </button>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-[500px]">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[50px] bg-green-200 border-8 border-green-800 transform rotate-3"></div>
                    <div className="relative rounded-[50px] border-8 border-green-800 bg-white p-4 transform -rotate-3 shadow-[12px_12px_0px_0px_rgba(22,101,52,1)]">
                      <img
                        src="./src/assets/headerPhoto.png"
                        width={500}
                        height={500}
                        alt="Cartoon character"
                        className="rounded-[30px] max-h-[500px] w-full object-contain"
                      />
                      <div className="absolute -top-12 -right-12 bg-yellow-400 text-green-800 font-extrabold text-xl p-6 rounded-full border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] transform rotate-12">
                        <span style={{ textShadow: "1px 1px 0px white" }}>
                          COOL!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-green-500">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xl font-extrabold text-green-800 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                  Özellikler
                </div>
                <h2
                  className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white"
                  style={{ textShadow: "3px 3px 0px #16a34a" }}
                >
                  Bilink ile Neler Yapabilirsiniz?
                </h2>
                <p className="max-w-[900px] text-xl text-white font-bold md:text-2xl">
                  Tüm Bağlantılarınızı Tek Bir Yerde Toplayın ve Kolayca
                  Paylaşın!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-[30px] border-4 border-green-800 transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative flex flex-col items-center space-y-4 rounded-[30px] border-4 border-green-800 bg-white p-6 transform -rotate-3 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                  <div className="rounded-full bg-green-500 p-3 text-white border-4 border-green-800">
                    <PiLightningFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-green-800 text-center">
                    Tek Link ile Her Şeyi Paylaşın
                  </h3>
                  <p className="text-center text-green-800 font-bold">
                    Sosyal medya ve favori linklerinizi gruplar halinde
                    düzenleyin ve paylaşın.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-[30px] border-4 border-green-800 transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative flex flex-col items-center space-y-4 rounded-[30px] border-4 border-green-800 bg-white p-6 transform -rotate-3 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                  <div className="rounded-full bg-green-500 p-3 text-white border-4 border-green-800">
                    <PiLightningFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-green-800 text-center">
                    Tarzınızı Yansıtan Profiller Oluşturun
                  </h3>
                  <p className="text-center text-green-800 font-bold">
                    Temanızı seçin ve AI destekli önerilerle markanıza özel bir
                    profil yapın.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-[30px] border-4 border-green-800 transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative flex flex-col items-center space-y-4 rounded-[30px] border-4 border-green-800 bg-white p-6 transform -rotate-3 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                  <div className="rounded-full bg-green-500 p-3 text-white border-4 border-green-800">
                    <PiLightningFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-green-800 text-center">
                    Tıklama Analizleriyle Kitlenizi Tanıyın
                  </h3>
                  <p className="text-center text-green-800 font-bold">
                    Link tıklamalarını analiz edin ve içerik stratejinizi
                    büyütmek için optimize edin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wavy Divider */}
        <div className="relative h-24 w-full overflow-hidden bg-green-500">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xl font-extrabold text-green-800 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                  Referanslar
                </div>
                <h2
                  className="text-3xl md:text-5xl font-extrabold tracking-tighter text-green-800"
                  style={{ textShadow: "3px 3px 0px #86efac" }}
                >
                  Kullanıcılarımız bizim için ne söylüyor?
                </h2>
                <p className="max-w-[900px] text-xl text-green-800 font-bold md:text-2xl">
                  Kullanıcılarımızın Deneyimlerini Keşfedin ve İlham Alın
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="group relative">
                <div className="absolute inset-0 bg-green-300 rounded-[30px] border-4 border-green-800 transform rotate-2 group-hover:rotate-4 transition-transform"></div>
                <div className="relative flex flex-col justify-between rounded-[30px] border-4 border-green-800 bg-white p-6 transform -rotate-2 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                    </div>
                    <div className="comic-bubble bg-green-100 border-4 border-green-800 p-4 rounded-[20px] relative">
                      <p className="text-green-800 font-bold">
                        "Bilink ile tüm sosyal medya linklerimi tek bir yerde
                        topladım, çok pratik!"
                      </p>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-100 border-r-4 border-b-4 border-green-800 transform rotate-45"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-4 mt-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                      <img
                        src="https://placehold.co/64"
                        width={64}
                        height={64}
                        alt="Ayşe K."
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-xl text-green-800">
                        Ayşe K.
                      </p>
                      <p className="text-green-700 font-bold">Influencer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-green-300 rounded-[30px] border-4 border-green-800 transform rotate-2 group-hover:rotate-4 transition-transform"></div>
                <div className="relative flex flex-col justify-between rounded-[30px] border-4 border-green-800 bg-white p-6 transform -rotate-2 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                    </div>
                    <div className="comic-bubble bg-green-100 border-4 border-green-800 p-4 rounded-[20px] relative">
                      <p className="text-green-800 font-bold">
                        "Profilimi AI önerileriyle tasarladım, markama çok uygun
                        bir görünüm oldu!"
                      </p>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-100 border-r-4 border-b-4 border-green-800 transform rotate-45"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-4 mt-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                      <img
                        src="https://placehold.co/64"
                        width={64}
                        height={64}
                        alt="Mert Y."
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-xl text-green-800">
                        Mert Y.
                      </p>
                      <p className="text-green-700 font-bold">Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-green-300 rounded-[30px] border-4 border-green-800 transform rotate-2 group-hover:rotate-4 transition-transform"></div>
                <div className="relative flex flex-col justify-between rounded-[30px] border-4 border-green-800 bg-white p-6 transform -rotate-2 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
                  <div className="space-y-4">
                    <div className="flex text-yellow-400">
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                      <PiStarFill className="h-6 w-6 fill-current stroke-green-800 stroke-2" />
                    </div>
                    <div className="comic-bubble bg-green-100 border-4 border-green-800 p-4 rounded-[20px] relative">
                      <p className="text-green-800 font-bold">
                        "Tıklama analizleri sayesinde hangi linklerimin popüler
                        olduğunu öğrendim!"
                      </p>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-100 border-r-4 border-b-4 border-green-800 transform rotate-45"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-4 mt-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                      <img
                        src="https://placehold.co/64"
                        width={64}
                        height={64}
                        alt="Elif S."
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-xl text-green-800">
                        Elif S.
                      </p>
                      <p className="text-green-700 font-bold">İçerik Üretici</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 bg-green-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xl font-extrabold text-green-800 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                  Awesome Deals!
                </div>
                <h2
                  className="text-3xl md:text-5xl font-extrabold tracking-tighter text-green-800"
                  style={{ textShadow: "3px 3px 0px #86efac" }}
                >
                  Pick Your Perfect Plan!
                </h2>
                <p className="max-w-[900px] text-xl text-green-800 font-bold md:text-2xl">
                  lorem ipsum dolar sit ametlorem ipsum dolar sit amet
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="group relative">
                <div
                  className={`absolute inset-0 
                   rounded-[30px] border-4 border-green-800 transfor group-hover:rotate-0 transition-transform`}
                ></div>
                <div
                  className={`relative flex flex-col rounded-[30px] border-4 border-green-800 p-6 transform group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]`}
                >
                  <h3 className="text-3xl font-extrabold text-green-800">
                    Sprout
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold text-green-800">
                      $9
                    </span>
                    <span className="ml-1 text-xl font-bold text-green-700">
                      /month
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-green-800">
                    Perfect for beginners and casual creators!
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <div className="mr-2 rounded-full bg-green-500 p-1 text-white border-2 border-green-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-lg font-bold text-green-800">
                        Basic green templates
                      </span>
                    </li>
                  </ul>
                  <button
                    className={`cursor-pointer mt-8 "bg-green-500 bg-green-300 hover:bg-green-600
                     text-green-800 font-extrabold text-xl rounded-full px-6 py-6 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[4px_2px_0px_0px_rgba(22,101,52,1)]`}
                  >
                    Get Started!
                  </button>
                </div>
              </div>
              <div className="group relative">
                <div
                  className={`absolute inset-0 
                   rounded-[30px] border-4 border-green-800 transfor group-hover:rotate-0 transition-transform`}
                ></div>
                <div
                  className={`relative flex flex-col rounded-[30px] border-4 border-green-800 p-6 transform group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]`}
                >
                  <h3 className="text-3xl font-extrabold text-green-800">
                    Sprout
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold text-green-800">
                      $9
                    </span>
                    <span className="ml-1 text-xl font-bold text-green-700">
                      /month
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-green-800">
                    Perfect for beginners and casual creators!
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <div className="mr-2 rounded-full bg-green-500 p-1 text-white border-2 border-green-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-lg font-bold text-green-800">
                        Basic green templates
                      </span>
                    </li>
                  </ul>
                  <button
                    className={`cursor-pointer mt-8 "bg-green-500 bg-green-300 hover:bg-green-600
                     text-green-800 font-extrabold text-xl rounded-full px-6 py-6 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[4px_2px_0px_0px_rgba(22,101,52,1)]`}
                  >
                    Get Started!
                  </button>
                </div>
              </div>
              <div className="group relative">
                <div
                  className={`absolute inset-0 
                   rounded-[30px] border-4 border-green-800 transfor group-hover:rotate-0 transition-transform`}
                ></div>
                <div
                  className={`relative flex flex-col rounded-[30px] border-4 border-green-800 p-6 transform group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]`}
                >
                  <h3 className="text-3xl font-extrabold text-green-800">
                    Sprout
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold text-green-800">
                      $9
                    </span>
                    <span className="ml-1 text-xl font-bold text-green-700">
                      /month
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-green-800">
                    Perfect for beginners and casual creators!
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <div className="mr-2 rounded-full bg-green-500 p-1 text-white border-2 border-green-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-lg font-bold text-green-800">
                        Basic green templates
                      </span>
                    </li>
                  </ul>
                  <button
                    className={`cursor-pointer mt-8 "bg-green-500 bg-green-300 hover:bg-green-600
                     text-green-800 font-extrabold text-xl rounded-full px-6 py-6 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[4px_2px_0px_0px_rgba(22,101,52,1)]`}
                  >
                    Get Started!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xl font-extrabold text-green-800 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                  Got Questions?
                </div>
                <h2
                  className="text-3xl md:text-5xl font-extrabold tracking-tighter text-green-800"
                  style={{ textShadow: "3px 3px 0px #86efac" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-xl text-green-800 font-bold md:text-2xl">
                  We've got answers to all your burning questions!
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-6 py-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-green-200 rounded-[30px] border-4 border-green-800 transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                <div className="relative rounded-[30px] border-4 border-green-800 bg-white transform -rotate-1 group-hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(22,101,52,1)] overflow-hidden">
                  <button className="flex w-full items-center justify-between p-6 text-left">
                    <h3 className="text-xl font-extrabold text-green-800">
                      question one
                    </h3>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white border-3 border-green-800 transition-transform `}
                    >
                      <span className="h-5 w-5" />
                    </div>
                  </button>
                  <div className="border-t-4 border-green-800 p-6">
                    <p className="text-lg font-bold text-green-800">answer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-green-500 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-300 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-30"></div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-[40px] border-4 border-green-800 transform rotate-2"></div>
                <div className="relative rounded-[40px] border-4 border-green-800 bg-white p-8 transform -rotate-2 shadow-[12px_12px_0px_0px_rgba(22,101,52,1)]">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2
                        className="text-3xl md:text-5xl font-extrabold tracking-tighter text-green-800"
                        style={{ textShadow: "2px 2px 0px #86efac" }}
                      >
                        Ready to Get Started?
                      </h2>
                      <p className="max-w-[600px] text-xl text-green-800 font-bold">
                        lorem ipsum dolar sit amet lorem ipsum dolar sit amet
                        lorem ipsum dolar sit amet
                      </p>
                    </div>
                    <div className="w-full max-w-sm space-y-4 pt-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-800 transform rotate-1"></div>
                        <input
                          type="text"
                          placeholder="Enter your @username"
                          className="outline-none w-full relative rounded-full border-4 border-green-800 bg-white p-6 text-lg font-bold text-green-800 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] placeholder:text-green-600/70"
                        />
                      </div>
                      <button className="cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-xl rounded-full px-6 py-6 border-4 border-green-800 shadow-[6px_6px_0px_0px_rgba(22,101,52,1)] transition-transform hover:translate-y-1 hover:shadow-[6px_4px_0px_0px_rgba(22,101,52,1)]">
                        Sign Up Now!
                      </button>
                      <p className="text-sm font-bold text-green-800">
                        By signing up, you agree to our{" "}
                        <Link
                          href="#"
                          className="underline underline-offset-2 hover:text-green-600"
                        >
                          Terms & Conditions
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 relative">
        <div className="container mx-auto">
          <div className="rounded-[40px] border-4 border-green-800 bg-green-300 p-8 shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 font-bold text-green-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)]">
                    <span className="text-2xl font-extrabold text-green-800">
                      Bi
                    </span>
                  </div>
                  <span
                    className="text-2xl font-extrabold"
                    style={{ textShadow: "2px 2px 0px white" }}
                  >
                    link
                  </span>
                </div>
                <p className="mt-2 text-lg font-bold text-green-800">
                  Everything you are. In one, simple link in bio. One link to
                  help you share everything you create, curate and sell from
                  your Instagram, TikTok, Twitter, YouTube and other social
                  media profiles.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-extrabold text-green-800">
                  Product
                </h3>
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-extrabold text-green-800">
                  Company
                </h3>
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-extrabold text-green-800">
                  Legal
                </h3>
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-bold text-green-800 hover:text-green-600"
                    >
                      Licenses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t-4 border-green-800 pt-6 md:flex-row">
              <p className="text-center text-lg font-bold text-green-800">
                © {new Date().getFullYear()} Bilink. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-yellow-400 p-3 text-green-800 hover:bg-yellow-500 border-3 border-green-800 shadow-[2px_2px_0px_0px_rgba(22,101,52,1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-yellow-400 p-3 text-green-800 hover:bg-yellow-500 border-3 border-green-800 shadow-[2px_2px_0px_0px_rgba(22,101,52,1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-yellow-400 p-3 text-green-800 hover:bg-yellow-500 border-3 border-green-800 shadow-[2px_2px_0px_0px_rgba(22,101,52,1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

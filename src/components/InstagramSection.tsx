export const InstagramSection = () => {
  const instagramImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQcsxL4ETIYouvVuUG88XzijdPlxF2cvmE0xevD_CnGcwExptnB7Beiv5fiqUK5Pk1rFwifrWR3y_w5pPD_4r9FxrWA81KzKGSQleHX52TyIUQuJTfAqRBQq-A44LmDekWys9xVRDiqs69BZW1HNv9EbWG4XHx8leQwCdW8w2ruaEGEI6feaI_f2XlbSMbpl-Pu-y5R8hqVd4-81UBXpZT0uCEPcSOG6OL5bOa_q2P6yK49pBgc9G3lZsqxZOlwaB6biVsyqLtYFY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBynUZHfenLrm81buu3OzrboffeVRbLzogDlvm3RuKOG4mra3nuKOD2s2Dw5RTwHFQ9cyHmiLx-k0it93JvyMLZbmrD1zO7hc4QcJMla3JOto3WowgZ2Ln9caG4VrehNDyb6X0y8w--IyLwAP4-B8umM7qvW0BbwveSE5jDo4kmE7UVFrtfLDf3RDWgwYzf4XPlKoUufOurQLI_mEZnGJAsatiButWWxlnRybqUc1qiXUEFnHH4PlXO-5o531Xc3q0RSsXjqW-Gi24",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQsUJSaD4qQhl2_dgwSzVYZ1bXK1MioaWkiKWNs1QEc6mTB12bPw5CXHcyKDx1iDf-9ebMfX0bvNK92hOm_se3RVYX4JrxjPwmWLCFQrc9eHX9gB0ifN1cMRlY4pzOc2tbYFrD5vbdpYwFNi7Xh_x9BLnuWCvjOhsq8Z0WcNBJjYDNKx0qFjlXpbytYaqzX4nZORaeZR-m8qoOzRSYCbjROC22gf0mG1kTMWOPcy7ge-QKDjaKxCGfIdAHT-2IPvOEkzer5_U0Wfw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZVeB1uCU7ZBRQ4LPkaXF5j9mNa_X5hy_eRpTHUbPf_cO9bXM_81r3k4zgA4scD0sD2fT6lvEzUF8784eo6QsKIwzylxmoPLLZH4V2MjGXveeC3MaxYV6NZgmZi5LMgkXAb0x6Sx8v9iW1-lhL8RBrejBNl6y3fXyOWW1HVN8ue_XK4znld8SUkRCS75aMCIW1IGzrIT1TGP2gnBJWQf71q1rciWCX-ourH24pOeM1kYI-5xYeYEuvsqxR3zQgKPzALhDHLbPHVN8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXb5tcOnGdCq6g11F-UsaPWzZrawmm8IJJlScHrN9y_FftikaKn-LMQGNvoR3L7Z1JJV-21U2Wh503umngP8P_mw4HI_6dEfRoZglhes3rcfZBbFO1bw5c2lL4E8k0WprQ-ogzBEwLtw2NVb0zU2XGucT32KqRiZ_p4dU2wWJ7icYF6ESHoUgJNxcop-IjkgFEzwmF2Px4Gns-rtOM_Zj4IFQobQKn58-jEtdl7q2djAc65y4uAqb9NVwHxNSko-huBg3i4_Nt1rs",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDANkJLv8u0i-oWwplDMxJkiM7RjHsHwL3EEDtgSJWiElT0pYfYgrefulvgCT7lBNwftXiSSqEiYoeldOl5niFX0r8cf0WJvgsr94_Q7ya6_cwYdaKddtnAmtAN6lOVhe3Sb0g5UGf-v7kfSGN0GR3BRAeMGmX-Cm3iDXqtFxh258qkZWkCUpyo7GzeG-TUm7zrwrYWeDzbaJk1EjRKDxsYvoONmGqAoEEG7OykvS0g02cMKcAXqsdFrLY_0iG3RWXl3xbtmyYz2e8"
  ];

  return (
    <section className="py-12 px-4 bg-card" id="instagram">
      <h2 className="text-primary text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
        Volg ons op Instagram
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-6xl mx-auto">
        {instagramImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square bg-cover bg-center rounded-lg cursor-pointer transition-smooth hover:scale-105 shadow-card"
            style={{ backgroundImage: `url("${image}")` }}
            onClick={() => window.open('https://instagram.com/omasoliebollen', '_blank')}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a
          href="https://instagram.com/omasoliebollen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-bold hover:text-accent/80 transition-smooth text-lg"
        >
          @omasoliebollen
        </a>
      </div>
    </section>
  );
};
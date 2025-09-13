export const KnownFromSection = () => {
  const mediaLogos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-G1hXHAjBX5ZZaGSJNm5fPktNjyMBASOhgPYtjLbuIN2oNHySIIq_K0oFhwfPbhZu6YGoc3SLMstmcsrlZnBY7wvTByhfN2u5dnULK8rz1qVJB9EQMB5MvVx2Jna369gSTSuRh6X0oxJTFYalRdhgbPeR36idM9KGuU6BwbEWxBMsuJrK6c8_QcJywmUFdxY7uif3PklKuwpECEbRAO4Z4fKRdyvAxX-dGzdIvBBB694TsWcyA3_r45InsSqqTFB3gmoHSiQes4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCD8iO6quVPBNIZJax5CeOkF4OknaE9hEKtuz108wS6iQt-bEtsy8Eq-CnL946lqV4Oa5zyZVXDL_c0AvGpqtCox0MfsRUojqNQn-fJw22nIuya60aP7e2_RQmxF_kH2HICyE2sNJR492-djSOBHjtGWLfbjvWXHbasLwwTe-6-CrOAJ9lrG9IU5wuTi9ImAR6ImN2nkLjjJAPx516JFc0fKV5Ru52QVvwwg7E3p7T_phLMdnCSCuLVjCWKciCPsmljaWQU1muQFdI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8zQmpY1GsDBwRj2avt4eRZYEQ5p6-NS_Y7LaQi-_Mte5_AcFikTBsQZXIfuF3Jtj6a56zeeWZG1WThBn-lf-S3JzZJczgfd504gLP1CS8Ax5SQbAC38zKWghTf8-U6ntOeNW23mc2qhmFC15UyCxYbHzw3MHyM3IU6q2aGLLyrSFvERt9SEeLTuCCErapjdvdm0gzZJDS213YlofO1pbLtMQwpLeyVH8d6rDvD_Ija3E5xXxMmrCgvVIeo22_aayaPRSY_OrS68",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDL5VvwqqSMDUeO-VukO37um9jrKtvB9UoOKXqhLwiNDTVDZmyB8JiO8uMH6Ezxsl3POXGQnwCfrOHZW5WdD8A1HA0gSdDtVVV1l-mTEmE4TsrapqaLyRf_JPNspeaCkGHY8JLh9gBEQyFUuduVUoukVvuJj3JGt-LHRwg2dOf8136fhZcFN0p4f2iCA6PwbCvyUj16UDFJ0wV8JHAZ1iIQwBDOE3xnh_z1ehNVD3Cb7YUjJs6SukL70rRvmvuR1yJkYiphoyaBBHw"
  ];

  return (
    <section className="py-12 bg-card" id="known-from">
      <h2 className="text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-primary mb-8">
        Bekend Van
      </h2>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center justify-center gap-16 mx-8">
            {mediaLogos.map((logo, index) => (
              <img
                key={`logo-${index}`}
                alt={`Media logo ${index + 1}`}
                className="h-12 grayscale-hover"
                src={logo}
              />
            ))}
          </div>
          <div aria-hidden="true" className="flex items-center justify-center gap-16 mx-8">
            {mediaLogos.map((logo, index) => (
              <img
                key={`logo-duplicate-${index}`}
                alt={`Media logo ${index + 1}`}
                className="h-12 grayscale-hover"
                src={logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
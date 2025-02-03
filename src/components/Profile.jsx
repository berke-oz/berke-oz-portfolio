const Profile = () => {
    return (
        <section className="max-w-6xl mx-auto pt-45 py-12 ml-[110px]">
            <h2 className="text-[48px] font-semibold text-gray-900 mb-8">Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Sol taraf - Kişisel Bilgiler */}
                <div>
                    <h3 className="text-[24px] font-medium text-indigo-600 mb-4">Profile</h3>
                    <ul className="text-gray-900 space-y-2">
                        <li><strong>Doğum Tarihi:</strong> 24.03.1996</li>
                        <li><strong>İkamet Şehri:</strong> Ankara</li>
                        <li><strong>Eğitim Durumu:</strong> Hacettepe Üniv. Biyoloji</li>
                        <li><strong>Lisans:</strong> 2016</li>
                        <li><strong>Tercih Ettiği Rol:</strong> Frontend, UI</li>
                    </ul>
                </div>

                {/* Sağ taraf - About Me */}
                <div>
                    <h3 className="text-[24px] font-medium text-indigo-600 mb-4">About Me</h3>
                    <p className="text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
                        odit laborum aliquam voluptatem nisi mollitia.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
                        temporibus cumque magnam!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Profile;

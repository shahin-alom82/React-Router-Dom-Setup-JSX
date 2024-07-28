import { Link } from "react-router-dom";

const Header = () => {



      const navigation = [
            { title: "Cancel", link: "/cancel" },
            { title: "Cart", link: "/cart" },
            { title: "Category", link: "/category" },
            { title: "Favorite", link: "/favorite" },
            { title: "NotFound", link: "/notfound" },
            { title: "Orders", link: "/orders" },
            { title: "Product", link: "/product" },
            { title: "Profile", link: "/profile" },
            { title: "Success", link: "/success" },
      ];

      return (
            <div className="flex justify-between max-w-screen-xl mx-auto items-center h-full p-6 shadow-lg  text-xl" >
                  {/* <img src="" alt="Logo" /> */}
                  <h1 className="text-3xl">Logo</h1>
                  <div>
                        <ul className="flex gap-10 ">
                              {
                                    navigation.map((item, index) => (
                                          <Link to={item.link}>
                                                <li key={index} className="hover:text-gray-500 duration-500 cursor-pointer">{item.title}</li>
                                          </Link>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
};

export default Header;
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import product from "../assets/product.png"
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/mdf.png";
import product8 from "../assets/wood_adhesive.png";
import product9 from "../assets/universal_silicone.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
} from "@material-tailwind/react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
    {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    price: "$35",
    color: "Black",
    },
{
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    price: "$35",
    color: "Black",
    },
{
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    price: "$35",
    color: "Black",
    },

];

export default function Products() {
  return (
    <Layout>
      <div className="bg-white">
        <section class="text-gray-600 body-font">
          <div className="mx-auto max-w-2xl px-4   sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-center py-4">
              Our wide range of products
            </h2>
            <p className="text-center">
              We offer a wide range of products to our customers. We have the
              best products in Ghana.
            </p>
          </div>
          <div class="container px-5 py-6 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product3}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product6}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product6}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product6}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product6}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p class="mt-1">$16.00</p>
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product6}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product3}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  {/* <p class="mt-1">$16.00</p> */}
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full h-full">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full"
                  src={product}
                />

                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
//object-center object-cover  w-full h-full
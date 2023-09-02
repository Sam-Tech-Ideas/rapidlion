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
        <div className="mx-auto max-w-2xl px-4 py-4  sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-center">
            Our wide range of products
          </h2>
          <p>
            We offer a wide range of products to our customers. We have the best
            products in Ghana. We are always ready to serve you with the best.
          </p>
        </div>

        <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src={product6}
                alt="Hollywood Sign on The Hill"
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src={product5}
                alt="Palm Springs Road"
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src={product}
                alt="Skyscrapers"
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
          <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src={product6}
                alt="Los Angeles Skyscrapers"
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { fetchWooApi } from "@/app/lib/ApiHelper/fetchWooApi";
import Recommended from "@/components/index/Recommended";
import React from "react";

const page = async ({ params }) => {
  const productId = params.id;
  const product = await fetchWooApi(`products/${productId}`);
  const data = await product.json();
  console.log(data.related_ids);
  return (
    <>
      <div class="container grid grid-cols-2 gap-6">
        <div>
          <img
            src="../assets/images/products/product1.jpg"
            alt="product"
            class="w-full"
          />
          <div class="grid grid-cols-5 gap-4 mt-4">
            <img
              src="../assets/images/products/product2.jpg"
              alt="product2"
              class="w-full cursor-pointer border border-primary"
            />
            <img
              src="../assets/images/products/product3.jpg"
              alt="product2"
              class="w-full cursor-pointer border"
            />
            <img
              src="../assets/images/products/product4.jpg"
              alt="product2"
              class="w-full cursor-pointer border"
            />
            <img
              src="../assets/images/products/product5.jpg"
              alt="product2"
              class="w-full cursor-pointer border"
            />
            <img
              src="../assets/images/products/product6.jpg"
              alt="product2"
              class="w-full cursor-pointer border"
            />
          </div>
        </div>

        <div>
          <h2 class="text-3xl font-medium uppercase mb-2">{data.name}</h2>
          <div class="flex items-center mb-4">
            <div class="flex gap-1 text-sm text-yellow-400">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
            </div>
            <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div class="space-y-2">
            <p class="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span class="text-green-600">In Stock</span>
            </p>
            <p class="space-x-2">
              <span class="text-gray-800 font-semibold">Brand: </span>
              <span class="text-gray-600">Apex</span>
            </p>
            <p class="space-x-2">
              <span class="text-gray-800 font-semibold">Category: </span>
              <span class="text-gray-600">Sofa</span>
            </p>
            <p class="space-x-2">
              <span class="text-gray-800 font-semibold">SKU: </span>
              <span class="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p class="text-xl text-primary font-semibold">{data.price}</p>
            <p class="text-base text-gray-400 line-through">
              {data.regular_price}
            </p>
          </div>

          <p
            class="mt-4 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          ></p>

          <div class="pt-4">
            <h3 class="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div class="flex items-center gap-2">
              <div class="size-selector">
                <input type="radio" name="size" id="size-xs" class="hidden" />
                <label
                  for="size-xs"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" id="size-sm" class="hidden" />
                <label
                  for="size-sm"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" id="size-m" class="hidden" />
                <label
                  for="size-m"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" id="size-l" class="hidden" />
                <label
                  for="size-l"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div class="size-selector">
                <input type="radio" name="size" id="size-xl" class="hidden" />
                <label
                  for="size-xl"
                  class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div class="flex items-center gap-2">
              <div class="color-selector">
                <input type="radio" name="color" id="red" class="hidden" />
                <label
                  for="red"
                  class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-[#fc3d57]"
                ></label>
              </div>
              <div class="color-selector">
                <input type="radio" name="color" id="black" class="hidden" />
                <label
                  for="black"
                  class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-balck"
                ></label>
              </div>
              <div class="color-selector">
                <input type="radio" name="color" id="white" class="hidden" />
                <label
                  for="white"
                  class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block bg-white"
                ></label>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div class="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i class="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a
              href="#"
              class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i class="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>

          <div class="flex gap-3 mt-4">
            <a
              href="#"
              class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="container pb-16">
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div class="w-3/5 pt-6">
          <div class="text-gray-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>

          <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th class="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <th class="py-2 px-4 border border-gray-300 ">
                Blank, Brown, Red
              </th>
            </tr>
            <tr>
              <th class="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <th class="py-2 px-4 border border-gray-300 ">Latex</th>
            </tr>
            <tr>
              <th class="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <th class="py-2 px-4 border border-gray-300 ">55kg</th>
            </tr>
          </table>
        </div>
      </div>
      <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related products
        </h2>
        <Recommended />
      </div>
    </>
  );
};

export default page;

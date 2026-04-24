<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-dark">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 py-8">
        <div class="block">
          <a href="/">
            <img src="/logo.svg" alt="logo" class="h-16 w-auto" />
          </a>
          <div class="space-y-4 text-white mt-6">
            <div class="block">
              <UIcon name="i-lucide-map-pin" class="size-6 text-accent" />
              <span class="ml-3 text-base font-body"
                >4920 Trails End Road Ft<br /><span class="ml-8"
                  >United States, FL 33311</span
                ></span
              >
            </div>
            <div class="block">
              <UIcon name="i-lucide-mail-open" class="size-6 text-accent" />
              <span class="ml-3 text-base font-body">ordernow@foodka.com</span>
            </div>
            <div class="block">
              <UIcon
                name="i-lucide-phone-incoming"
                class="size-6 text-accent"
              />
              <span class="ml-3 text-base font-body">+997 509 153 849</span>
            </div>
          </div>
        </div>

        <div class="block">
          <h4 class="text-xl text-white font-extrabold mb-8">Hot Menu</h4>
          <ul class="space-y-4 text-base text-white">
            <li><a href="#">Burger King Whopper</a></li>
            <li><a href="#">Five Guys Cheeseburger</a></li>
            <li><a href="#">KFC Original Recipe Chicken</a></li>
            <li><a href="#">Wendy's Frosty</a></li>
            <li><a href="#">McDonald's Happy Meal</a></li>
            <li><a href="#">Domino's Pepperoni Pizza</a></li>
          </ul>
        </div>

        <div class="block">
          <h4 class="text-xl text-white font-extrabold mb-8">Opening Hours</h4>
          <ul class="space-y-4 text-base text-white">
            <li><a href="#">Monday : 09.00am-10.00pm</a></li>
            <li>Tuesday : 09.00am-10.00pm</li>
            <li>Wednesday : 09.00am-10.00pm</li>
            <li>Thursday : 09.00am-10.00pm</li>
            <li>Friday : 09.00am-10.00pm</li>
            <li>Saturday & Sunday : <span class="text-danger">Closed</span></li>
          </ul>
        </div>

        <div class="block">
          <h4 class="text-xl text-white font-extrabold mb-8">
            Instagram Feeds
          </h4>

          <ul class="grid grid-cols-3 gap-2">
            <li class="overflow-hidden rounded">
              <a href="#">
                <img
                  src="/images/instagram/1.png"
                  class="w-full h-full object-cover"
                />
              </a>
            </li>

            <li class="overflow-hidden rounded">
              <a href="#">
                <img
                  src="/images/instagram/2.png"
                  class="w-full h-full object-cover"
                />
              </a>
            </li>

            <li class="overflow-hidden rounded">
              <a href="#">
                <img
                  src="/images/instagram/3.png"
                  class="w-full h-full object-cover"
                />
              </a>
            </li>

            <li class="overflow-hidden rounded">
              <a href="#">
                <img
                  src="/images/instagram/4.png"
                  class="w-full h-full object-cover"
                />
              </a>
            </li>

            <li class="overflow-hidden rounded">
              <a href="#">
                <img
                  src="/images/instagram/5.png"
                  class="w-full h-full object-cover"
                />
              </a>
            </li>

            <li class="overflow-hidden rounded">
              <a href="#">
                <img
                  src="/images/instagram/6.png"
                  class="w-full h-full object-cover"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="py-4 border-t">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <p class="text-white">© {{ year }} Food, All Rights Reserved.</p>
          <div class="flex flex-wrap items-center gap-4 text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon name="i-uil:facebook" class="size-7" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon name="i-uil:linkedin" class="size-7" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon name="i-uil:youtube" class="size-7" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon name="i-uil:whatsapp" class="size-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>

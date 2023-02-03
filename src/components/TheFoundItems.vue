<script setup>
import foundItemsData from "../assets/found.json";

const foundItems = foundItemsData.data;
</script>

<template>
    <div class="bg-white">
        <div
            class="fixed inset-0 flex z-40 sm:hidden"
            role="dialog"
            aria-modal="true"
        ></div>

        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Found Items
            </h1>
            <p class="mt-4 max-w-xl text-sm text-gray-700">
                Join the effort in reuniting lost items with their rightful
                owners. Check out the listings of found items in our database
                and help bring a smile to someone's face by reporting a match.
            </p>
        </div>

        <!-- Filters -->
        <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" class="sr-only">Filters</h2>

            <div class="relative z-10 bg-white pb-4">
                <div
                    class="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8"
                >
                    <div class="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                id="menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                Sort
                                <!-- Heroicon name: solid/chevron-down -->
                                <svg
                                    class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
                        <div
                            class="hidden origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabindex="-1"
                        >
                            <div class="py-1" role="none">
                                <!--
                Active: "bg-gray-100", Not Active: ""

                Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
              -->
                                <a
                                    href="#"
                                    class="font-medium text-gray-900 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="menu-item-0"
                                >
                                    Most Popular
                                </a>

                                <a
                                    href="#"
                                    class="text-gray-500 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="menu-item-1"
                                >
                                    Best Rating
                                </a>

                                <a
                                    href="#"
                                    class="text-gray-500 block px-4 py-2 text-sm"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="menu-item-2"
                                >
                                    Newest
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="bg-white">
        <div
            class="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <h2 class="sr-only">Products</h2>

            <div
                class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
                <a href="#" class="group" v-for="item in foundItems">
                    <div
                        class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <img
                            :src="item.img_url"
                            :alt="item.name"
                            class="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700 flex flex-col">
                        <div>Finder: {{ item.finder }}</div>
                        <div>Found Last: {{ item.date_found }}</div>
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">
                        {{ item.name }}
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

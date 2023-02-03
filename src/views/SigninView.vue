<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <section class="bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div
                class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8"
            >
                <div class="absolute inset-0">
                    <img
                        class="object-cover object-top w-full h-full"
                        src="https://images.unsplash.com/photo-1603802872032-8989a32ac93b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                        alt=""
                    />
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                ></div>
            </div>

            <div
                class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24"
            >
                <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                    <h2
                        class="text-3xl font-bold leading-tight text-black sm:text-4xl"
                    >
                        Sign in
                    </h2>
                    <p class="mt-2 text-base text-gray-600">
                        Don’t have an account?
                        <a
                            href="#"
                            title=""
                            class="font-medium text-[#F1B380] transition-all duration-200 hover:text-[#F1B380] focus:text-[#F1B380] hover:underline"
                            >Create a free account</a
                        >
                    </p>

                    <form action="#" method="POST" class="mt-8">
                        <div class="space-y-5">
                            <div>
                                <label
                                    for=""
                                    class="text-base font-medium text-gray-900"
                                >
                                    Email address
                                </label>
                                <div
                                    class="mt-2.5 relative text-gray-400 focus-within:text-gray-600"
                                >
                                    <div
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                    >
                                        <Icon
                                            icon="uil:at"
                                            width="20"
                                            height="20"
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#F1B380] focus:bg-white caret-[#F1B380]"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label
                                        for=""
                                        class="text-base font-medium text-gray-900"
                                    >
                                        Password
                                    </label>

                                    <a
                                        href="#"
                                        title=""
                                        class="text-sm font-medium text-[#F1B380] transition-all duration-200 hover:text-[#F1B380] focus:text-[#F1B380] hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div
                                    class="mt-2.5 relative text-gray-400 focus-within:text-gray-600"
                                >
                                    <div
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                    >
                                        <Icon
                                            icon="uil:key-skeleton"
                                            width="20"
                                            height="20"
                                        />
                                    </div>

                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Enter your password"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#F1B380] focus:bg-white caret-[#F1B380]"
                                    />
                                </div>
                            </div>

                            <div>
                                <!-- <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-[#F1B380] focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Log in
                                </button> -->
                                <RouterLink
                                    to="/home"
                                    class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-[#F1B380] focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Log in
                                </RouterLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

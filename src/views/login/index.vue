<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import Cookies from 'js-cookie'

const router = useRouter()
// const userState = userStore();
// const time = useTimeFix();

// const { handleSubmit, errors, values } = useForm({
//   initialValues: {
//     account: '',
//     password: '',
//   },
//   validationSchema: schema,
// });

// useFields(Object.keys(schema));

onMounted(() => {
  Cookies.set('666', '999', { expires: 7 })
})

// const onSubmit = handleSubmit(async (values: any) => {
//   router.push('/dashboard');
// });

const onSubmit = () => {
  console.log('0')

  router.push('/dashboard')
}
</script>

<template>
  <div class="h-screen font-sans bg-cover login">
    <div
      class="container flex items-center justify-center flex-1 h-full mx-auto"
    >
      <div class="relative w-full mx-10 sm:max-w-sm">
        <div
          class="absolute w-full h-full transform bg-blue-400 shadow-lg card rounded-3xl -rotate-6"
        ></div>

        <div
          class="absolute w-full h-full transform bg-red-400 shadow-lg card rounded-3xl rotate-6"
        ></div>

        <div
          class="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl"
        >
          <label
            for=""
            class="block mt-3 text-2xl font-semibold text-center text-gray-700"
          >
            登录
          </label>
          <form class="mt-10" @submit.prevent="onSubmit">
            <div class="relative">
              <input
                class="block w-full pl-2 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <!-- <VeeValidateError :error="errors.account" /> -->
            </div>

            <div class="relative mt-7">
              <input
                class="block w-full pl-2 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <!-- <VeeValidateError :error="errors.password" /> -->
            </div>

            <div class="flex mt-10">
              <label
                for="remember_me"
                class="inline-flex items-center w-full cursor-pointer"
              >
                <input
                  id="remember_me"
                  type="checkbox"
                  class="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  name="remember"
                />
                <span class="ml-2 text-sm text-gray-600"> 记住我 </span>
              </label>

              <div class="w-full text-right">
                <a
                  class="text-sm text-gray-600 underline hover:text-gray-900"
                  href="#"
                >
                  忘记密码
                </a>
              </div>
            </div>

            <div class="mt-7">
              <button
                class="w-full py-3 text-white transition duration-500 ease-in-out transform bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105"
              >
                登录
              </button>
            </div>

            <div class="flex items-center text-center mt-7">
              <hr class="w-full border-gray-300 rounded-md border-1" />
              <label class="block w-full text-sm font-medium text-gray-600">
                第三方登录
              </label>
              <hr class="w-full border-gray-300 rounded-md border-1" />
            </div>

            <div class="flex justify-center w-full mt-7">
              <div
                class="flex items-center justify-center px-4 py-2 mr-5 text-white transition duration-500 ease-in-out transform bg-blue-500 border-none shadow-xl cursor-pointer rounded-xl hover:shadow-inner hover:-translate-x hover:scale-105"
              >
                <i-mdi-qqchat style="font-size: 1em; color: #fff" />
                <span class="ml-1">QQ</span>
              </div>
              <div
                class="flex items-center justify-center px-4 py-2 text-white transition duration-500 ease-in-out transform bg-green-600 border-none shadow-xl cursor-pointer rounded-xl hover:shadow-inner hover:-translate-x hover:scale-105"
              >
                <i-mdi-wechat style="font-size: 1.2em; color: #fff" />
                <span class="ml-1">WX</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  // background: url("../../assets/img/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

import "@/styles"
import Main from "@/layouts/Main"
import { Head } from "minista"
import Header from "@/layouts/Header"

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Frontend Mentor | Room homepage</title>
        <script src="/src/main.js" defer type="module"></script>
      </Head>
      <Header />
      <Main />
    </>
  )
}

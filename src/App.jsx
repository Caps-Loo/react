import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Button from './components/button';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Introduction from './components/introduction';
import Profile from './components/profile';
import { useRef } from 'react';

function App() {
  // kedua 2
  // const [getNavbarValue, setNavbarValue] = useState("");
  // function changeNavbarValue() {
  //   setNavbarValue("My Contact");
  // }
  // kedua 2

  // pertama 1
  // const heading = "Ka Raihan";
  // function clicked() {
  //   return(
  //     alert("Tombol dipencet")
  //   )
  // }
  // function paragraf() {
  //   return <i>Mantap ini footer</i>;
  // } 
  // pertama 1

  // keempat 4
  // kiri -> getter
  // kanan -> setter
  // const [getNamaDepanR, setNamaDepanR] = useState("Raihan")
  // const [getNamaDepanH, setNamaDepanH] = useState("Haya")
  // const [tambahKurang, setTambahKurang] = useState(0)

  // const [angkaPasti, setAngkaPasti] = useState("")

  // useEffect(() => {
  //   if (tambahKurang === 1) {
  //     setAngkaPasti("ganjil")
  //   } else {
  //     setAngkaPasti("genap")
  //   }
  // }, [tambahKurang])
  // keempat 4

  const linkRef = useRef(null)

  function goTo(ref) {
    scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (

    // <>
    // {/* kelima 5 */}
    // <button onClick={() => goTo(linkRef.current)}>Click Me!!</button>
    //   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores sint ullam quae voluptatibus expedita magni optio. Distinctio, delectus omnis ratione eligendi voluptatibus consequuntur praesentium animi fugiat voluptatum qui corporis ea quidem debitis rerum esse, harum iusto eaque minus perferendis assumenda excepturi est neque velit? Accusantium obcaecati aliquam quidem pariatur exercitationem ipsum ducimus eaque, excepturi accusamus, corporis nisi corrupti laborum reiciendis consectetur cupiditate esse provident labore. Asperiores earum cum officia iste odio quo sit beatae voluptate maxime dignissimos ea aliquid autem eaque, omnis natus consequuntur tempora sunt quis pariatur recusandae possimus delectus quae nemo aliquam. Quis eligendi similique ducimus quaerat.</p>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quisquam dolorum obcaecati ex consectetur esse optio eaque error molestiae possimus cum ratione porro rem, iste expedita nemo magnam. Possimus dolore suscipit aut perferendis magnam ut adipisci modi repellendus odit, assumenda esse nihil dolorem. Asperiores sequi veritatis tempore dignissimos corporis placeat earum, minima, iste maxime atque, repudiandae quidem soluta dolor deleniti? Recusandae a labore architecto esse. Voluptates pariatur voluptatum adipisci nulla praesentium, consequuntur eveniet soluta ipsum laudantium voluptatem? Aspernatur, nobis molestiae debitis laborum similique explicabo quisquam, quia sed cumque earum labore maiores corporis numquam assumenda quod delectus aut dignissimos autem asperiores.</p>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus eveniet corporis similique! Magnam autem cum natus quia commodi corrupti error nemo sit quas quibusdam sunt quisquam accusantium saepe, in facilis debitis perferendis libero, modi nulla, id obcaecati minima. Esse illum soluta assumenda eaque veniam impedit ut laudantium molestiae expedita, doloremque dolor perferendis aspernatur tenetur repudiandae doloribus, reiciendis asperiores neque nobis. Ducimus alias facilis debitis? Et, voluptatibus, ullam qui dignissimos dolore voluptas error corrupti incidunt accusamus doloremque, id at soluta illum? Nihil mollitia suscipit eius quo nemo enim sit maiores sequi animi cum nam et, dolore voluptates accusantium saepe quas tempora voluptatibus blanditiis tenetur autem explicabo quis. Cumque, vel inventore distinctio officiis quos sapiente ullam, quasi modi sunt saepe numquam laboriosam, eos quidem neque voluptas nostrum facilis illum esse. Qui soluta ea placeat ab, quibusdam vero obcaecati, aliquid adipisci amet dignissimos est incidunt inventore pariatur ratione iusto dolores temporibus, natus unde animi maxime corporis quam. Voluptates magni non omnis deserunt ipsa voluptatibus ducimus aspernatur veniam nam quis animi numquam exercitationem iusto quia voluptatum praesentium, aperiam maxime sit. Animi illo eveniet at reprehenderit, accusamus a adipisci, dolorum debitis assumenda nostrum deserunt, quae perspiciatis quaerat ratione autem labore tenetur asperiores possimus laboriosam.</p>

    //   <a href="https://react.dev/" target='_blank' ref={linkRef}>learn react</a>

    //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nostrum, numquam quo sunt inventore ab modi natus, quasi quis quisquam vitae corporis sequi illo dignissimos, sit explicabo corrupti laborum cum voluptate veritatis consectetur at fugit? Nam debitis cumque obcaecati quibusdam, officia earum delectus facere amet non excepturi nisi vel doloremque reiciendis harum officiis tempore ratione, perspiciatis quidem, eveniet aliquam numquam error provident? At temporibus necessitatibus voluptatum sed obcaecati, praesentium rerum exercitationem error quas itaque reprehenderit, qui, voluptatibus ipsam molestias omnis id optio expedita dolore totam assumenda cumque! Nostrum culpa optio sequi sit praesentium maiores? Fugit quia eveniet consectetur aliquid. Nihil.</p>
    //   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda tempora et sed? Magnam quibusdam dolore tenetur esse a eligendi repudiandae! Deserunt aliquid voluptates pariatur maxime recusandae delectus nemo blanditiis praesentium, nobis, distinctio architecto minus officia quaerat aliquam porro laborum natus quos reiciendis perferendis facilis quod dolore iste. Provident, reiciendis? Voluptatibus voluptatem cupiditate architecto quidem incidunt officia adipisci vero reiciendis itaque error? Veniam, sed maiores. Sapiente ea necessitatibus sequi officiis sit cupiditate ipsam fugiat voluptates vero, consequatur possimus saepe unde nostrum nemo aspernatur! Animi, ex recusandae laudantium et autem ut tenetur earum in soluta provident quos cupiditate minima aliquam aspernatur inventore. Esse nisi explicabo in vel dicta veritatis voluptas ducimus cum ad, autem, consequuntur quia, voluptatibus illum beatae molestiae facere numquam animi sequi? Id maxime libero, perferendis, enim rem consequatur quod voluptate dolores quos earum at! Quia, qui eos error aperiam ab ducimus aliquam fugiat dolores nam labore nesciunt vero reprehenderit natus! Quam, fugiat iusto optio unde nobis asperiores consequuntur tempora? Nesciunt, omnis eos? Tempore laboriosam cupiditate ex laborum eum quas iusto officiis consectetur voluptatem sequi, excepturi saepe, ad impedit non earum debitis. Labore quia nobis eveniet ad quis assumenda, consectetur debitis harum! Eius dolore quas odio sapiente asperiores non.\</p>
    //   {/* kelima 5 */}
    // </>

      /* keempat 4 */
      // <h1>{getNamaDepanR} dan {getNamaDepanH} adalah pasangan </h1>
      // <button onClick={() => setNamaDepanR((prev) => prev + " Pratama")}>Nama Lengkap</button>
      // <button onClick={() => setNamaDepanH((prev) => prev + " Safaraz")}>Nama Lengkap</button>

      // <h1>angka {tambahKurang}</h1>
      // <button onClick={() => setTambahKurang((prev) => prev + 1)}>Tambah</button>
      // <button onClick={() => setTambahKurang((prev) => prev - 1)}>Kurang</button>

      // <h5>angka {tambahKurang} adalah angka {angkaPasti}</h5>
      /* keempat 4 */

    /* pertama 1 */
    // <Navbar name="Calon Pasangan"/>
    // <Navbar baby="Hayasa"/>
    // <Navbar halo={heading}/>
    // <h1>Hello</h1>
    // <p>assalamualaikum semua</p>
    // <Button clicked={clicked}/>
    // <Footer paragraf={paragraf} /> 
    // <Introduction name="Haya Safaraz" />
    // <Introduction name="Raihan Pratama" /> 
    /* pertama 1 */

    /* kedua 2 */
    /* <Navbar navValue = {getNavbarValue}/>
    <h1>Ini HomePage</h1>
    <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button> */
    /* kedua 2 */

    // ketiga 3
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    // ketiga 3
  )
}

export default App

import Header from "./Component/header";
import Main from "./Page/Main";
import MyPage from "./Page/MyPage";
import Mint from "./Page/Mint";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Explore from "./Page/Explore";
import Sell from "./Page/Sell";
import Buy from "./Page/Buy";
import { useState, useEffect } from "react";
import axios from "axios";
// 유의 사항
// Header 컴포넌트의 z-index를 최 상단으로 유지하기 위해 99로 등록해두었습니다.
// 다른 컴포넌트들은 무조건 99보다 낮게 지정 부탁드립니다!
function App() {
  const [nfts, setNfts] = useState([]);
  const [address, setAddress] = useState(window.ethereum.selectedAddress);
  const [mypageNfts, setMypageNfts] = useState([]);

  async function getNFTs() {
    let result = await axios.get("http://localhost:4000/nft");
    setNfts(result.data);
  }

  async function getMyPage() {
    let result = await axios.get(
      `http://localhost:4000/nft?account_address=${window.ethereum.selectedAddress}`
    );
    setMypageNfts([...result.data]);
  }

  useEffect(() => {
    setAddress(window.ethereum.selectedAddress);
    getNFTs();
  }, []);

  useEffect(() => {
    getMyPage();
    console.log(mypageNfts);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main nfts={nfts} />}></Route>
          <Route
            path="/mypage"
            element={<MyPage mypageNfts={mypageNfts} getMyPage={getMyPage} />}
          ></Route>
          <Route path="/mint" element={<Mint />}></Route>
          <Route path="/explore" element={<Explore nfts={nfts} />}></Route>
          <Route path="/sell/:index" element={<Sell />}></Route>
          <Route path="/buy/:index" element={<Buy nfts={nfts} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

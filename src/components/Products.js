import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Lenovo Legion 5 Pro 16",
    imgURL: "https://m.media-amazon.com/images/I/61VmV+g9SZL._AC_SL1500_.jpg",
    price: 580,
  },
  {
    id: 2,
    name: "Newest HP 17 Laptop, 17.3",
    imgURL: "https://m.media-amazon.com/images/I/81x2cDWTunS._AC_SX425_.jpg",
    price: 469,
  },
  {
    id: 3,
    name: "Lenovo Flex 5 Laptop",
    imgURL: "https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SX679_.jpg",
    price: 476,
  },
  {
    id: 4,
    name: "2022 Newest HP Pavilion",
    imgURL: "https://m.media-amazon.com/images/I/81lfR4FnRhL._AC_SX679_.jpg",
    price: 543,
  },
  {
    id: 5,
    name: "2020 Apple MacBook Pro",
    imgURL: "https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_SX425_.jpg",
    price: 571,
  },
  {
    id: 6,
    name: "HP Stream 14-inch Laptop",
    imgURL: "https://m.media-amazon.com/images/I/71oIchL4jFL._AC_SX425_.jpg",
    price: 302,
  },
  {
    id: 7,
    name: "BiTECOOL Laptop",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/71wNTKl0pfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    price: 139,
  },
  {
    id: 8,
    name: "2022 Newest HP Premium ",
    imgURL: "https://m.media-amazon.com/images/I/71IOwQhjZNL._AC_SX679_.jpg",
    price: 624,
  },
  {
    id: 9,
    name: "Dell Inspiron 16 5625 ",
    imgURL: "https://m.media-amazon.com/images/I/41ETTRs7pRL._AC_SX425_.jpg",
    price: 665,
  },
  {
    id: 10,
    name: "Lenovo IdeaPad Laptop",
    imgURL: "https://m.media-amazon.com/images/I/81-O6maZmjL._AC_SX425_.jpg",
    price: 894,
  },
  {
    id: 11,
    name: "BiTECOOL Laptop",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/71wNTKl0pfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    price: 139,
  },
  {
    id: 12,
    name: "Lenovo Legion 5 Pro 16",
    imgURL: "https://m.media-amazon.com/images/I/61VmV+g9SZL._AC_SL1500_.jpg",
    price: 580,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

// 0: {title: '[Ebay] Lenovo Legion 5 Pro 16" Laptop: Ryzen 7 580…PS 165Hz 500 Nit Display for $1,119 after 36% off', url: 'https://www.ebay.com/itm/304185773366?mkcid=1&mkri…&campid=5338636961&customid=&toolid=10001&mkevt=1'}
// 1: {title: '[Walmart] Refurbished HP 15.6" Laptop: Ryzen 5 550… GB RAM, 256 GB SSD, 1080p 15.6" Display for $319', url: 'https://goto.walmart.com/c/1883484/565706/9383?veh…%3A%2F%2Fwww.walmart.com%2Fip%2Fseort%2F998382582'}
// 2: {title: '[Lenovo Store] Lenovo ThinkPad L15 Gen 2 Laptop: R…splay for $516.53 after coupon code SUPERMAYCLEAR', url: 'https://lenovo.vzew.net/kj2yjL'}
// 3: {title: '[Ebay] ASUS Zenbook 14 Laptop: Ryzen 5 5500U, MX45… 1080p 14" IPS Display for $469.99 after $250 off', url: 'https://www.ebay.com/itm/325201016023?mkcid=1&mkri…&campid=5338636961&customid=&toolid=10001&mkevt=1'}
// 4: {title: '[Amazon] Acer Swift X SFX14-41G-R0SG Creator Lapto…rd | Windows 10 Home. Now: $849.99 After $100 Off', url: 'https://progamerstech.com/product/acer-swift-x-sfx…vme-ssd-wi-fi-6-backlit-keyboard-windows-10-home/'}
// 5: {title: '[Ebay, Back in Stock] Lenovo IdeaPad Gaming 3 15" …15.6" 120Hz IPS Display for $599.99 after 39% off', url: 'https://www.ebay.com/itm/124977213779?mkcid=1&mkri…&campid=5338636961&customid=&toolid=10001&mkevt=1'}
// 6: {title: '[Lenovo] ThinkPad E14 G3 Laptop configured with; 1…es SUPERMAYCLEAR & THINKOUT ($341 off) , for $630', url: 'https://lenovo.vzew.net/c/1883484/218864/3808?u=ht…e14-gen-3-(14%25E2%2580%259D-amd)%2F20y7cto1wwus1'}
// 7: {title: '[eBay, Price Drop] Lenovo Legion 5, 15.6", 165Hz, … 3070 (130W). Now: $1,269 After $550 (30% Off) 🔥', url: 'https://www.ebay.com/itm/304354450470?mkcid=1&mkri…8849294&customid=GameChanger&toolid=10001&mkevt=1'}
// 8: {title: '[eBay, Price Drop] Lenovo Legion 5 Pro 16" Laptop:…S Display. Now: $1,389 After $320.99 (18% Off) 🔥', url: 'https://www.ebay.com/itm/125058259597?mkcid=1&mkri…8849294&customid=GameChanger&toolid=10001&mkevt=1'}
// 9: {title: '[Walmart] ASUS Vivobook Pro 14" Laptop: i5-11300H,…% DCI-P3, Thunderbolt 4. Now: $599 After $150 Off', url: 'http://goto.walmart.com/c/2553023/565706/9383?veh=…iet-Blue-Windows-10-Home-K3400PA-WH51%2F194597162'}
// 10: {title: '[Lenovo Store] Lenovo ThinkPad X12 Detachable Lapt… after coupon codes THINKMAYSALE2022 and THINKOUT', url: 'https://lenovo.vzew.net/P0mLaq'}
// 11: {title: '[Dell] G15 SE gaming laptop - RTX 3060 (130 W) / i…ith coupon MDSODEAL07, $1058 after Rakuten rebate', url: 'https://deals.dell.com/en-us/member/productdetail/ef4p'}
// 12: {title: '[Lenovo] ThinkPad E15 Gen 4 AMD laptop - Ryzen 565… discount available for students/military/medical', url: 'https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpade/thinkpad-e15-gen-4-15-amd/21ed0048us'}
// 13: {title: '[Amazon] MSI Vector GP76 Laptop: i9-12900HK, RTX 3…17.3″ 360Hz IPS Display for $2,649 after $150 off', url: 'https://laptopsdeals.net/product/msi-vector-gp76-l…m-1-tb-ssd-1080p-17-3%e2%80%b3-360hz-ips-display/'}
// 14: {title: '[Amazon] Razer Book 13 Laptop: i7-1165G7, 16 GB RA…underbolt 4, 3.09 lbs for $1,499.99 after 17% off', url: 'https://laptopsdeals.net/product/razer-book-13-lap…-uhd-13-4%e2%80%b3-ips-2x-thunderbolt-4-3-09-lbs/'}
// 15: {title: '[HP] HP OMEN 16.1" Laptop: Ryzen 7 5800H, RTX 3070…9.99 after $150 off + 10% coupon code 10GAMER2022', url: 'https://www.awin1.com/cread.php?awinmid=7168&awina…us-en%2Fshop%2Fpdp%2Fomen-by-hp-laptop-16-c0035nr'}
// 16: {title: '[Ebay] Lenovo IdeaPad Slim 7i 14" Laptop: i7-1165G…ttery, 2x Thunderbolt 4 for $656.99 after 43% off', url: 'https://www.ebay.com/itm/265294707676?mkcid=1&mkri…&campid=5338636961&customid=&toolid=10001&mkevt=1'}
// 17: {title: '[Dell] G15 Intel 3060 gaming laptop - RTX 3060 (13…with coupon MDSODEAL02, $970 after Rakuten rebate', url: 'https://deals.dell.com/en-us/member/productdetail/ef49'}
// 18: {title: '[HP] Spectre x360 2-in-1 3K OLED laptop - 13.5" 30… using coupon 10MDSHP, $1125 after Rakuten rebate', url: 'https://www.hp.com/us-en/shop/pdp/hp-spectre-x360-14-convertible-pc-457q6av-1'}
// 19: {title: '[HP Store] HP Pavilion Laptop, With Windows 11 Hom… PCIe® NVMe™ M.2 SSD. Now: $619.99 After $360 Off', url: 'https://www.awin1.com/cread.php?awinmid=7168&awina…avilion-laptop-15t-eg100-touch-optional-43f54av-1'}
// 20: {title: '[HP Store] HP Pavilion x360 Convertible Laptop - W… PCIe® NVMe™ M.2 SSD. Now: $549.99 After $150 Off', url: 'https://www.awin1.com/cread.php?awinmid=7168&awina…ilion-x360-convertible-laptop-14t-dy100-45x03av-1'}
// 21: {title: '[Amazon] GIGABYTE G5 KD - 15.6" FHD 144Hz, Intel C…(G5 KD-52US123SO). Now: $999 After $300 (23% Off)', url: 'https://progamerstech.com/product/gigabyte-g5-kd-1…2gb-ssd-win11-home-gaming-laptop-g5-kd-52us123so/'}
// 22: {title: '[Amazon] Acer Swift 3 Intel Evo Thin & Light Lapto…r, Back-lit KB. Now: $655 After $284.99 (30% Off)', url: 'https://progamerstech.com/product/acer-swift-3-int…-fingerprint-reader-back-lit-kb-sf314-511-7412-2/'}
// 23: {title: '[Amazon] Lenovo IdeaPad 3 15″ Laptop: Ryzen 5 5500… 15.6″ Display. Now: $529.99 After $110 (17% Off)', url: 'https://progamerstech.com/product/lenovo-ideapad-3…amd-radeon-7-graphics-windows-11-home-abyss-blue/'}
// 24: {title: '[Acer Store] Acer Predator Triton 300 15.6" Full H…A GeForce RTX 3070, 16 GB RAM, 512GB SSD $1199.99', url: 'https://store.acer.com/en-us/predator-triton-300-g…8902ddd0e11ec82d701fd0a82b82a&cjdata=MXxOfDB8WXww'}
// length: 25

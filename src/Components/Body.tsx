import React, { useEffect, useState } from "react";
import CardButton from "./CardButton.tsx";

const getHeaderHeight = () => {
  const header = document.querySelector("#header");
  return header ? (header as HTMLElement).offsetHeight : 0;
};

const Body: React.FC = () => {
  //const [minHeight, setMinHeight] = useState("100vh");

  /*useEffect(() => {
    const updateMinHeight = () => {
      const headerHeight = getHeaderHeight();
      const footer = document.querySelector("footer");
      const footerHeight = footer ? (footer as HTMLElement).offsetHeight : 0;
      setMinHeight(`calc(100vh - ${headerHeight + footerHeight}px)`);
    };
    // Espera a que el DOM esté listo
    setTimeout(updateMinHeight, 0);
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);*/

  return (
    <div
      style={{
        width: "100vw",
        paddingTop: "90px",
        minHeight: "2160px", //minHeight,
        maxHeight: "100vh",
        overflow: "auto",
        background: `
          url("/assets/fondo_instalaciones.jpg") center/cover no-repeat,
          linear-gradient(to bottom, rgba(255,255,255,0) 70%, #e0e0e0 100%)
        `,
        backgroundBlendMode: "normal",
        color: "#333",
        bottom: "0",
      }}
    >
      <h1>Welcome to React-CID</h1>
      <p>This is the body content of the application.</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        quas distinctio dolore accusamus! Dolor suscipit hic optio repellendus
        praesentium nisi quaerat ea alias temporibus. Sapiente tempore quis
        magnam accusamus adipisci? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ut dolorum aliquam ipsam debitis error, perferendis
        eum molestiae dignissimos vitae tempore, nihil modi id non molestias
        iste ea repudiandae animi laboriosam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis sunt quam amet dolorem! Alias maxime
        vitae porro nihil quod eveniet eum veniam, natus temporibus delectus
        aspernatur, debitis similique! Accusantium, recusandae. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Ratione nobis at quibusdam
        enim, ipsa, repellendus eveniet velit consequuntur quod dicta assumenda,
        ea quia voluptatem! Obcaecati eum suscipit culpa ullam consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        quo modi cumque impedit nihil tempore voluptas, quod dolorum nobis
        quibusdam iste saepe delectus ullam vel et, eos tenetur. Eaque, minima.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        impedit recusandae quia in. Assumenda consectetur ad sapiente qui itaque
        maxime, natus sequi quibusdam, ex laudantium totam unde dicta
        accusantium velit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. At, alias. Expedita quod beatae maiores ea aliquam numquam impedit
        cum est ducimus, quisquam praesentium, natus commodi ut nobis maxime
        ipsam nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Praesentium, quos fuga quasi assumenda id blanditiis iste fugit in nulla
        fugiat corporis architecto nemo, atque repudiandae accusamus molestias
        perferendis consequuntur dignissimos! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Obcaecati fugiat nam minima doloribus
        suscipit totam? Laboriosam, voluptatem quo. Fugiat voluptas hic et modi
        rerum explicabo, reprehenderit architecto sint sequi fuga!Lorem
      </p>
      <CardButton
        title="Card Button Example"
        handleClick={() => alert("Card Button Clicked!")}
      ></CardButton>
    </div>
  );
};

export default Body;

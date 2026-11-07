
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  const [books] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      price: 15,
      cover: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
      description:
        "Set in the glamorous world of the 1920s, this novel follows Jay Gatsby, a mysterious millionaire who throws extravagant parties in the hope of winning back his lost love, Daisy Buchanan. Through Gatsby's story, the book explores love, wealth, dreams, and the American Dream."
    },
    {
      id: 2,
      title: "And Then There Were None",
      author: "Agatha Christie",
      category: "Crime",
      price: 18,
      cover: "https://covers.openlibrary.org/b/isbn/9780062073488-L.jpg",
      description:
        "Ten strangers are invited to a remote island, but their peaceful visit soon turns into a terrifying mystery. As each guest faces accusations about their past, they begin to disappear one by one. Everyone becomes a suspect in this famous detective story."
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Adventure",
      price: 20,
      cover: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
      description:
        "Santiago, a young shepherd from Spain, dreams of finding treasure near the Egyptian pyramids. His journey takes him across deserts and introduces him to people who help him understand his dreams, discover his purpose, and listen to his heart."
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      price: 18,
      cover: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
      description:
        "Elizabeth Bennet is a clever young woman who meets the wealthy and mysterious Mr. Darcy. Their first impressions lead to misunderstandings, pride, and unexpected feelings. This romantic classic explores love, family, social class, and the importance of understanding others."
    },
    {
      id: 5,
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasy",
      price: 22,
      cover: "https://covers.openlibrary.org/b/isbn/9781408855652-L.jpg",
      description:
        "Harry Potter discovers on his eleventh birthday that he is a wizard. He enters Hogwarts School of Witchcraft and Wizardry, where he makes friends, learns magic, and discovers secrets about his past and a dangerous enemy."
    },
    {
      id: 6,
      title: "Little Women",
      author: "Louisa May Alcott",
      category: "Classic",
      price: 16,
      cover: "https://covers.openlibrary.org/b/isbn/9780147514011-L.jpg",
      description:
        "The novel follows the lives of four sisters: Meg, Jo, Beth, and Amy March. Each sister has different dreams and challenges as they grow up during the American Civil War. It is a warm story about family, friendship, love, and following your dreams."
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      price: 21,
      cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
      description:
        "Bilbo Baggins is a quiet hobbit whose peaceful life changes when he joins a group of dwarves on a dangerous journey. Together, they travel through mysterious lands, face magical creatures, and try to reclaim a lost treasure guarded by a dragon."
    },
    {
      id: 8,
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      category: "Crime",
      price: 17,
      cover: "https://cdn.penguin.co.uk/dam-assets/books/9780141034355/9780141034355-jacket-large.jpg",
      description:
        "Join the brilliant detective Sherlock Holmes and his friend Dr. Watson as they investigate twelve fascinating mysteries. Using careful observation, logic, and clever reasoning, Holmes solves unusual cases involving secrets, strange events, and unexpected criminals."
    },
    {
      id: 9,
      title: "هيبتا",
      author: "محمد صادق",
      category: "Romance",
      price: 14,
      cover: "https://books.google.com/books/content?id=oTEUEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      description:
        "تأخذنا رواية هيبتا إلى عالم العلاقات العاطفية، من خلال محاضرة يقدمها أسامة عن المراحل السبع للحب. ومن خلال مجموعة من الحكايات والشخصيات، نكتشف كيف يبدأ الحب وكيف تتغير المشاعر، وما يرافق العلاقات من أمل وألم وتحديات."
    },
    {
      id: 10,
      title: "أرض زيكولا",
      author: "عمرو عبد الحميد",
      category: "Fantasy",
      price: 16,
      cover: "https://books.google.com/books/content?id=zNZJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      description:
        "تدور أحداث الرواية حول خالد، الذي يجد نفسه في عالم غريب اسمه أرض زيكولا. في هذا العالم لا يتعامل الناس بالمال، بل بوحدات الذكاء، ويصبح الذكاء هو الثروة التي تحدد مكانة الإنسان وقدرته على النجاة. تبدأ رحلة مليئة بالمغامرات والمخاطر."
    },
    {
      id: 11,
      title: "الفيل الأزرق",
      author: "أحمد مراد",
      category: "Crime",
      price: 19,
      cover: "https://www.shoroukbookstores.com/images/Books/original/9789770932278.jpg",
      description:
        "تبدأ الأحداث عندما يعود الطبيب النفسي يحيى إلى عمله في مستشفى العباسية بعد سنوات من العزلة. هناك يلتقي بصديق قديم متهم في قضية غامضة، فيحاول فهم ما حدث له. تقوده القضية إلى عالم مليء بالأسرار والغموض والصراعات النفسية."
    },
    {
      id: 12,
      title: "ثلاثية غرناطة",
      author: "رضوى عاشور",
      category: "Adventure",
      price: 20,
      cover: "https://covers.openlibrary.org/b/isbn/9789770907375-L.jpg",
      description:
        "تأخذنا الرواية إلى الأندلس بعد سقوط غرناطة، وتتابع حياة عائلة أندلسية عبر أجيال متعاقبة. نعيش معهم التغيرات السياسية والاجتماعية، ومحاولاتهم للحفاظ على هويتهم وذكرياتهم ولغتهم في زمن مليء بالتحديات."
    }
  ]);

  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === book.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...book, quantity: 1 }];
    });
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <HashRouter>
      <div className="app">
        <Navbar cartCount={cartCount} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/books"
              element={
                <Books books={books} onAddToCart={addToCart} />
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/books/:id"
              element={
                <BookDetails
                  books={books}
                  onAddToCart={addToCart}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

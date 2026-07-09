import { useEffect } from 'react';

import Loader from 'components/Loader';
import { GithubCorner, GithubStarButton } from 'components/Github';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Cart from 'components/Cart';
import Chatbot from 'components/Chatbot';

import { useProducts } from 'contexts/products-context';
import useCart from 'contexts/cart-context/useCart';

import * as S from './style';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();
  const { isOpen, openCart, closeCart } = useCart();

  const toggleCart = () => {
    if (isOpen) {
      closeCart();
      return;
    }

    openCart();
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container>
      {isFetching && <Loader />}
      <GithubCorner />
      <S.Header>
        <S.Title>ShopNow</S.Title>
        <S.HeaderActions>
          <S.IconButton title="Cart" onClick={toggleCart}>
            <span aria-hidden="true">🛒</span>
          </S.IconButton>
          <S.IconButton title="User">
            <span aria-hidden="true">👤</span>
          </S.IconButton>
        </S.HeaderActions>
      </S.Header>
      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
          <GithubStarButton />
        </S.Side>
        <S.Main>
          <S.MainHeader>
            <p>{products?.length} Product(s) found</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
      <Chatbot />
    </S.Container>
  );
}

export default App;

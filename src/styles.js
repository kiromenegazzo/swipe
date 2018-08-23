import styled, { injectGlobal } from "styled-components";

const styles = injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .App {
    max-width: 320px;
    height: 640px;
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
    background-image: linear-gradient(lightblue, purple);
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding: 10px;
  text-align: left;

  .item {
    &__settings {
      display: flex;
      margin-left: 10px;

      button {
        background-color: transparent;
        border: 1px solid;
        padding: 10px;
        &:not(:last-of-type) {
          border-right: none;
        }
      }
    }
  }
`;

const ItemTitle = styled.div`
  flex: 1 0 100%;
  transition: margin-left 0.5s ease-out;
  margin-left: ${props => (props.isOpen ? `-200px` : "0")};
`;
export { styles, Item, ItemTitle };

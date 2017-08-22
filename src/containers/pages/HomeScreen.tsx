import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import ProductList from '../../components/ProductList/index'
import { fetchProducts } from '../../modules/product/actions'
import * as D from '../../definitions'

export type PageProps<S> = DispatchProp<S> & {
  products: D.ProductState;
}

class HomeScreen extends React.Component<PageProps<object>> {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    console.log("hello!render!")
    return (
      <ProductList products={this.props.products}/>
    )
  }
}

const mapStateToProps = (state: D.RootState) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(HomeScreen)
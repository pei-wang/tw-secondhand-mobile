import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import ProductList from '../../components/ProductList/index'
import { fetchBoughtProducts } from '../../modules/product/actions'
import * as D from '../../definitions'

export type PageProps<S> = DispatchProp<S> & {
  products: D.ProductState;
}

class BoughtScreen extends React.Component<PageProps<object>> {
  componentDidMount() {
    this.props.dispatch(fetchBoughtProducts())    
  }
  render() {
    return (
      <ProductList products={this.props.products}/>
    )
  }
}

const mapStateToProps = (state: D.RootState) => {
  return {
    products: state.orders,
  }
}

export default connect(mapStateToProps)(BoughtScreen)
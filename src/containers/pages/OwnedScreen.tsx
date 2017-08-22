import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import ProductList from '../../components/ProductList/index'
import { fetchOwnedProducts } from '../../modules/product/actions'
import * as D from '../../definitions'

export type PageProps<S> = DispatchProp<S> & {
  products: D.ProductState;
}



class OwnedScreen extends React.Component<PageProps<object>> {
  componentDidMount() {
    this.props.dispatch(fetchOwnedProducts())    
  }
  render() {
    return (
      <ProductList products={this.props.products}/>
    )
  }
}

const mapStateToProps = (state: D.RootState) => {
  return {
    products: state.owned,
  }
}

export default connect(mapStateToProps)(OwnedScreen)
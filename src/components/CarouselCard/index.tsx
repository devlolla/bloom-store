import { brlFormatter } from "../../utils/currencyFormat"
import { BuyInformation, CatalogBuyButton, ContainerCard, WrapperContent } from "./style"


type CardProps = {
  image?: string,
  price?: number,
  discountValue?: number,
}

export default function CarouselCard ({
  image, 
  price, 
  discountValue
}: CardProps) {

  return (
    <ContainerCard>
      <WrapperContent>
        <div className="box-image">
          <img src={image} alt="" />
        </div>
        <BuyInformation>
          <div className="discount-tag">
            <p>
              {discountValue}% OFF
            </p>
          </div>
          <div className="price-area">
            <div className="price-item">
              <strong>DE:</strong> <p>{brlFormatter.format(price ?? 0)}</p>
            </div>
            <div className="price-item">
              <strong>POR:</strong> <p>{brlFormatter.format(price ?? 0)}</p>
            </div>
          </div>
        </BuyInformation>
      </WrapperContent>
      <CatalogBuyButton>
        COMPRAR
      </CatalogBuyButton>
    </ContainerCard>
  )
}
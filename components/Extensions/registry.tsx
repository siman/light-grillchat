import { ImageExtension, ImageExtensionSchema } from './image/ImageExtension'
import ImageModal from './image/ImageModal'
import NFTModal from './nft/NFTModal'
import { NFTSchema, NFT as NftExtension } from './nft/NftExtension'
import { ExtensionEntry } from './types'
import ImageIcon from '@/assets/extension-icons/image.svg'
import NFTIcon from '@/assets/extension-icons/nft.svg'

const nft: ExtensionEntry = {
  name: "NFT",
  schemaName: NftExtension.schemaName,
  constructor: (options: any) => new NftExtension(options),
  modal: <NFTModal />,
  icon: <NFTIcon />
}

const image: ExtensionEntry = {
  name: "Image",
  schemaName: ImageExtension.schemaName,
  constructor: (options: any) => new ImageExtension(options),
  modal: <ImageModal />,
  icon: <ImageIcon />
}

// Append your Extension Schema in this type.
export type ExtensionSchemas = NFTSchema | ImageExtensionSchema

// Add the Extension Entry for your extension in this array.
export const registry: ExtensionEntry[] = [nft, image]
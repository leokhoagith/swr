export * from './use-swr'
import { default as useSWR } from './use-swr'
export { useSWRPages } from './use-swr-pages'
export {
  ConfigInterface,
  revalidateType,
  RevalidateOptionInterface,
  keyInterface,
  responseInterface
} from './types'
export { useSWRSuspenseStart, useSWRSuspenseEnd } from './use-swr-suspense'
export default useSWR

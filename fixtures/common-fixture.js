import {test as baseTest} from "@playwright/test"
import CommonUtils  from "../utils/CommonUtils"

export const test = baseTest.extend({
commonUtils : async({}, use)=> {
    await  use(new CommonUtils());
}
})

export { expect } from '@playwright/test';

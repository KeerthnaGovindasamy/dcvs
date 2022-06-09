import Web3 from "web3"
const provider = new Web3.providers.HttpProvider(
    "https://rpc-mumbai.matic.today"
    )
const web3 = new web3(provider)
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"user_id","type":"uint256"},{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"issue_date","type":"string"},{"internalType":"string","name":"valid_till","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"issuer","type":"string"},{"internalType":"uint256","name":"linked_skill_id","type":"uint256"}],"name":"add_certification","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"user_id","type":"uint256"},{"internalType":"string","name":"starting_date","type":"string"},{"internalType":"string","name":"ending_date","type":"string"},{"internalType":"string","name":"role","type":"string"},{"internalType":"uint256","name":"company_id","type":"uint256"}],"name":"add_experience","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"userid","type":"uint256"},{"internalType":"string","name":"skill_name","type":"string"}],"name":"add_skill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"address_to_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"exp_id","type":"uint256"},{"internalType":"uint256","name":"company_id","type":"uint256"}],"name":"approve_experience","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"employee_id","type":"uint256"}],"name":"approve_manager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cert_of_skill","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"certifications","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"issue_date","type":"string"},{"internalType":"string","name":"valid_till","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"issuer","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"companies","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"wallet_address","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"curr_emp_of_company","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"email_to_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"employees","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"company_id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"wallet_address","type":"address"},{"internalType":"bool","name":"is_employed","type":"bool"},{"internalType":"bool","name":"is_manager","type":"bool"},{"internalType":"uint256","name":"num_skill","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"user_id","type":"uint256"},{"internalType":"uint256","name":"skill_id","type":"uint256"},{"internalType":"string","name":"endorsing_date","type":"string"},{"internalType":"string","name":"comment","type":"string"}],"name":"endorse_skill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"endorsments","outputs":[{"internalType":"uint256","name":"endorser_id","type":"uint256"},{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"comment","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"endrs_of_skill","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"exp_of_user","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"experiences","outputs":[{"internalType":"string","name":"starting_date","type":"string"},{"internalType":"string","name":"ending_date","type":"string"},{"internalType":"string","name":"user_name","type":"string"},{"internalType":"string","name":"role","type":"string"},{"internalType":"bool","name":"currently_working","type":"bool"},{"internalType":"uint256","name":"company_id","type":"uint256"},{"internalType":"bool","name":"is_approved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"is_company","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"email","type":"string"}],"name":"login","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"prev_emp_of_company","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"requested_emp_of_company","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"acc_type","type":"string"}],"name":"sign_up","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"skills","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"verified","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"skills_of_user","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"email","type":"string"},{"internalType":"address","name":"new_address","type":"address"}],"name":"update_wallet_address","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const dscontract = new web3.eth.Contract(abi,"0xc9152c115741502ce07C92fC587bd99F7b596947")
export default dscontract
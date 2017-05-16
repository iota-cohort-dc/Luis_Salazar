require_relative 'bankaccount'
RSpec.describe BankAccount do
  before(:each) do 
    @bank1 = BankAccount.new
  end
  it 'get check balance' do
  	expect{@bank1.checking}.to output("Checking Balance is $0\n").to_stdout
  end
  it 'get total balance' do
  	expect{@bank1.total}.to output("Total between checking and savings is $0\n").to_stdout
  end
  it 'withdraw' do
  	expect{@bank1.withdraw(5,0)}.to output("insufficient funds\ninsufficient funds\n").to_stdout
  end
  it 'number of bank accounts' do
  	expect{@bank1.number_of_accounts}.to raise_error(NoMethodError)
  end
  it 'change interest' do
  	expect{@bank1.interest_rate = 2}.to raise_error(NoMethodError)
  end

end
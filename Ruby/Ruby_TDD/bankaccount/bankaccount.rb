class BankAccount
	attr_reader :account_num, :check, :save

	@@bank_accounts = 0

	def initialize
		@check = 0
		@save = 0
		@account_num = genNum
		@@bank_accounts += 1
		@interest_rate = 0.01
	end
	def get_account
		puts "Account number is #{@account_num}"
	end

	def checking
		puts "Checking Balance is $#{@check}"
		self
	end

	def saving
		puts "Savings Balance is $#{@save}"
		self
	end
	def deposit(check,save)
		@check += check
		@save += save
		self
	end

	def withdraw(check,save)
		if @check - check > 0
			@check -=check
		else
			puts "insufficient funds"
		end
		if @save - save > 0
			@save -=save
		else
			puts "insufficient funds"
		end
		self
	end
	def total
		sum = @check + @save
		puts "Total between checking and savings is $#{sum}"
		self
	end

	def account_info
		puts "ALL ACCOUNT INFO"
		puts "Account number is #{@account_num}"
		puts "Total between checking and savings is $#{@check + @save}"
		puts "Checking Balance is $#{@check}"
		puts "Savings Balance is $#{@save}"
		puts "interest_rate is #{@interest_rate}"
	end
	 def self.number_of_accounts
	    puts @@bank_accounts
	  end

	private
	def genNum
		rand(10000..99999)
	end
end

# account1 = BankAccount.new

# account1.get_account
# account1.checking.saving
# account1.deposit(100,50).account_info
# # account1.withdraw(200,25).account_info
# BankAccount.number_of_accounts

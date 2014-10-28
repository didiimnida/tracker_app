class Shopper < ActiveRecord::Base
	has_secure_password

	validates :email,
		presence: true,
		uniqueness: {case_sensitive: false},
		:format => {:with => /\A[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})\z/}

    validates :mobile, numericality: true, length: {minimum: 5}

    validates :password,
		presence: true,
		confirmation: true,
		length: {minimum: 3},
		on: :create

end

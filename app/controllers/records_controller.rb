class RecordsController < ApplicationController

	def index
		# Render all records and store in @records
		@records = Record.all
	end

	# Method for Record Creation
	def create

		# create a new Record, using record_params
		@record = Record.new(record_params)

		# on save 
		if @record.save
			# render new record data
			render json: @record
		else
			render json: @record.errors, status: :unprocessable_entity
		end
	end 

	private

	def record_params
		# title, amount and date consist within a record
		params.require(:record).permit(:title, :amount, :date)
	end
end

# http://www.codewars.com/kata/51c38e14ea1c97ffaf000003/train/ruby
# Complete the solution so that it takes an array of keys and a default value
# and returns a hash with all keys set to the default value.
#
# Example:
#
# solution([:draft, :completed], 0) # should return {draft: 0, completed: 0}

def solution(keys, default_value)
  new_hash = Hash.new
  keys.each do |key|
    new_hash[key] = default_value
  end
  new_hash
end

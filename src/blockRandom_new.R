library(viridisLite)

# In how many blocks will subjects be randomized?
n_blocks <- 6

# How many treatments are we using?
n_treatments <- 2

# What is the block size? (it must be a multiple of the number of treatments)
block_size <- 4
stopifnot(block_size %% n_treatments == 0)

# Generate random orders of treatments
treatments_in_block <- rep(seq(n_treatments),
                           block_size %/% n_treatments)
study_blocks <-
  sample(treatments_in_block) |>
  replicate(n = n_blocks)

# Visualize the treatment orders
treatment_colors <- inferno(n_treatments)
par(xpd = TRUE, mar = c(5, 4, 4, 11))
image(study_blocks,
      col = treatment_colors,
      xlab = "Subject Order", ylab = "Block",
      axes = FALSE)
axis(1, at = seq(0, 1, length.out = block_size), labels = seq(block_size))
axis(2, at = seq(0, 1, length.out = n_blocks), labels = seq(n_blocks))
legend(1 + 1.25 / block_size, 1, title = "Treatments",
       legend = LETTERS[seq(n_treatments)], fill = treatment_colors)
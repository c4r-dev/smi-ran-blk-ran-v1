library(viridisLite)

# In how many blocks will subjects be randomized?
n_blocks <- 2

# How many treatments are we using?
n_treatments <- 2

# What is the block size? (it must be a multiple of the number of treatments)
block_size <- 10
stopifnot(block_size %% n_treatments == 0)

# Generate random orders of treatments
treatments_in_block <- rep(seq(n_treatments), 
                           block_size %/% n_treatments)
study_blocks <-
  sample(treatments_in_block) |>
  replicate(n = n_blocks) |> 
  t()

# Visualize the treatment orders
treatment_colors <- inferno(n_treatments)
par(xpd = FALSE, mar = c(5, 4, 4, 11))
image(study_blocks,
      col = treatment_colors,
      xlab = "Block",
      axes = FALSE)
axis(1, at = seq(0, 1, length.out = n_blocks), labels = seq(n_blocks))
grid(nx = n_blocks, ny = block_size, col = "red", lty = 1, lwd = 1)
par(xpd = TRUE)
legend(1 + 1.25 / n_blocks, 1,
       legend = c("Treatment", "Control"), fill = treatment_colors)